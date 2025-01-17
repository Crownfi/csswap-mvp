use cosmwasm_std::{
	BankMsg, Binary, Coin, CosmosMsg, DepsMut, Empty, Env, MessageInfo, Reply, ReplyOn, Response, SubMsg, Uint128,
};

use crownfi_cw_common::{data_types::canonical_addr::SeiCanonicalAddr, storage::map::StoredMap};
use cw_utils::{nonpayable, ParseReplyError};
use sei_cosmwasm::{SeiMsg, SeiQuerier, SeiQueryWrapper};

use error::Erc20WrapperError;
use msg::ERC20WrapperExecMsg;

mod error;
pub mod msg;

const CONTRACT_NAME: &str = env!("CARGO_PKG_NAME");
const CONTRACT_VERSION: &str = env!("CARGO_PKG_VERSION");

const WRAP_EVM_CALL_ID: u64 = 2571182633660066190;
const UNWRAP_EVM_CALL_ID: u64 = 13078395618759265986;

#[cfg_attr(not(feature = "library"), cosmwasm_std::entry_point)]
pub fn instantiate(
	deps: DepsMut<SeiQueryWrapper>,
	_env: Env,
	_info: MessageInfo,
	_msg: Empty,
) -> Result<Response<SeiMsg>, Erc20WrapperError> {
	cw2::set_contract_version(deps.storage, CONTRACT_NAME, CONTRACT_VERSION)?;
	Ok(Response::new())
}

#[cfg_attr(not(feature = "library"), cosmwasm_std::entry_point)]
pub fn reply(_deps: DepsMut, _env: Env, msg: Reply) -> Result<Response<SeiMsg>, Erc20WrapperError> {
	const TRUE_BUT_IN_32_BYTES: [u8; 32] = [
		0u8, 0u8, 0u8, 0u8, 0u8, 0u8, 0u8, 0u8, 0u8, 0u8, 0u8, 0u8, 0u8, 0u8, 0u8, 0u8, 0u8, 0u8, 0u8, 0u8, 0u8, 0u8,
		0u8, 0u8, 0u8, 0u8, 0u8, 0u8, 0u8, 0u8, 0u8, 1u8,
	];

	match msg.id {
		WRAP_EVM_CALL_ID | UNWRAP_EVM_CALL_ID => {
			let data = msg
				.result
				.into_result()
				.map_err(ParseReplyError::SubMsgFailure)?
				.data
				.ok_or(ParseReplyError::ParseFailure("No return data".into()))?;

			if data == TRUE_BUT_IN_32_BYTES {
				Ok(Response::new())
			} else {
				Err(Erc20WrapperError::UnexpectedEvmReply(data))
			}
		}
		id => Err(Erc20WrapperError::InvalidReplyId(id)),
	}
}

#[cfg_attr(not(feature = "library"), cosmwasm_std::entry_point)]
pub fn migrate(
	deps: DepsMut<SeiQueryWrapper>,
	_env: Env,
	_msg: Empty,
) -> Result<Response<SeiMsg>, Erc20WrapperError> {
	cw2::set_contract_version(deps.storage, CONTRACT_NAME, CONTRACT_VERSION)?;
	Ok(Response::new())
}

#[cfg_attr(not(feature = "library"), cosmwasm_std::entry_point)]
pub fn execute(
	deps: DepsMut<SeiQueryWrapper>,
	env: Env,
	info: MessageInfo,
	msg: ERC20WrapperExecMsg,
) -> Result<Response<SeiMsg>, Erc20WrapperError> {
	let known_tokens = StoredMap::<[u8; 20], bool>::new(b"known_tokens");
	let querier = SeiQuerier::new(&deps.querier);

	let response = match msg {
		ERC20WrapperExecMsg::Wrap {
			evm_sender,
			token_addr,
			amount,
			recipient,
		} => {
			nonpayable(&info)?;

			if &token_addr[..2] != "0x" {
				return Err(Erc20WrapperError::InvalidEvmAddress(token_addr));
			}

			querier
				.erc20_token_info(token_addr.clone(), env.contract.address.to_string())
				.map_err(|err| Erc20WrapperError::InvalidERC20Contract(err))?;

			let capped_tkn_addr = token_addr[2..].to_uppercase();
			let bare_addr: [u8; 20] =
				hex::FromHex::from_hex(&capped_tkn_addr).map_err(|_| Erc20WrapperError::InvalidEvmAddress(token_addr.clone()))?;

			let subdenom = format!("crwn{capped_tkn_addr}");
			let denom = format!("factory/{}/{subdenom}", env.contract.address);

			let extra_msg = if !known_tokens.has(&bare_addr) {
				known_tokens.set(&bare_addr, &true)?;
				Some(SeiMsg::CreateDenom { subdenom })
			} else {
				None
			};

			let payload = encode_transfer_from_payload(evm_sender, (&env.contract.address).try_into()?, amount)?;
			let amount = Coin { amount, denom };

			let recipient = recipient.unwrap_or(info.sender);
			Response::new()
				.add_submessage(SubMsg {
					id: WRAP_EVM_CALL_ID,
					msg: SeiMsg::CallEvm {
						to: token_addr,
						data: payload,
						value: Uint128::zero(),
					}
					.into(),
					gas_limit: None,
					reply_on: ReplyOn::Always,
				})
				.add_messages(extra_msg)
				.add_message(SeiMsg::MintTokens { amount: amount.clone() })
				.add_submessage(SubMsg::new(CosmosMsg::Bank(BankMsg::Send {
					amount: vec![amount],
					to_address: recipient.to_string(),
				})))
		}
		ERC20WrapperExecMsg::Unwrap { evm_recipient } => {
			let mut msgs = Vec::with_capacity(info.funds.len() * 2);

			for fund in info.funds {
				let splited_denom = fund.denom.split('/').collect::<Box<[_]>>();
				splited_denom
					.get(1)
					.and_then(|x| if *x == env.contract.address { Some(x) } else { None })
					.ok_or(Erc20WrapperError::TokenDoesntBelongToContract)?;

				let token_addr = splited_denom[2].replace("crwn", "0x");
				let evm_payload = encode_transfer_payload(
					evm_recipient.as_slice().try_into().map_err(|_| {Erc20WrapperError::InvalidRecipient})?,
					fund.amount
				);

				msgs.push(SubMsg {
					id: UNWRAP_EVM_CALL_ID,
					msg: SeiMsg::CallEvm {
						to: token_addr,
						data: evm_payload,
						value: 0u128.into(),
					}
					.into(),
					gas_limit: None,
					reply_on: ReplyOn::Always,
				});
				msgs.push(SubMsg::new(BankMsg::Burn { amount: vec![fund] }));
			}

			Response::new().add_submessages(msgs)
		}
	};

	Ok(response)
}

const TRANSFER_SIG: &[u8] = b"\xa9\x05\x9c\xbb";
const TRANSFER_FROM_SIG: &[u8] = b"\x23\xb8\x72\xdd";

fn encode_transfer_from_payload(
	owner: Binary,
	recipient: SeiCanonicalAddr,
	amount: Uint128
) -> Result<String, Erc20WrapperError> {
	if owner.len() != 20 {
		return Err(Erc20WrapperError::InvalidEvmAddress(["0x", &hex::encode(owner)].join("")));
	}

	let mut buff = Vec::with_capacity(100);
	buff.extend_from_slice(TRANSFER_FROM_SIG);
	buff.extend_from_slice(&[0; 12]);
	buff.extend_from_slice(owner.as_slice());
	buff.extend_from_slice(&[0; 12]);
	buff.extend_from_slice(&recipient.as_slice()[12..]);
	buff.extend_from_slice(&[0; 16]);
	buff.extend_from_slice(&amount.to_be_bytes());

	Ok(Binary::from(buff).to_base64())
}

fn encode_transfer_payload(recipient: [u8; 20], amount: Uint128) -> String {
	let mut buff = Vec::with_capacity(68);

	buff.extend_from_slice(TRANSFER_SIG);
	buff.extend_from_slice(&[0; 12]);
	buff.extend_from_slice(recipient.as_slice());
	buff.extend_from_slice(&[0; 16]);
	buff.extend_from_slice(&amount.to_be_bytes());

	Binary::from(buff).to_base64()
}

// #[cfg(test)]
// mod tests {
// 	use super::*;
//
// 	// if it runs fine, there's no corrupted memory (i've also checked everything externally with valgrind)
// 	#[test]
// 	fn transfer_encoding() {
// 		let recipient = SeiCanonicalAddr::try_from("sei1grzhksjfvg2s8mvgetmkncv67pr90kk37cfdhq").unwrap();
// 		let amount: Uint128 = 69420u128.into();
//
// 		let mut tmp = vec![];
// 		tmp.extend_from_slice(TRANSFER_SIG);
// 		tmp.extend_from_slice(&unsafe { std::mem::transmute::<_, [u8; 32]>(recipient) });
// 		tmp.extend_from_slice(&[0; 16]);
// 		tmp.extend_from_slice(&amount.to_be_bytes());
//
// 		let to_test = encode_transfer_payload(recipient.as_slice().try_into().unwrap(), amount);
// 		assert_eq!(to_test, Binary::from(tmp).to_base64())
// 	}
//
// 	#[test]
// 	fn transfer_from_encoding() {
// 		let owner = Binary::from(hex::decode("1c6b4962b120aaa82259c2a010e23a640af3d4be").unwrap());
// 		let recipient = SeiCanonicalAddr::try_from("sei1grzhksjfvg2s8mvgetmkncv67pr90kk37cfdhq").unwrap();
// 		let amount: Uint128 = 69420u128.into();
//
// 		let mut buff = Vec::with_capacity(88);
// 		buff.extend_from_slice(TRANSFER_FROM_SIG);
// 		buff.extend_from_slice(&[0; 12]);
// 		buff.extend_from_slice(owner.as_slice());
// 		buff.extend_from_slice(&[0; 12]);
// 		buff.extend_from_slice(&recipient.as_slice()[12..]);
// 		buff.extend_from_slice(&[0; 16]);
// 		buff.extend_from_slice(&amount.to_be_bytes());
//
// 		let to_test = encode_transfer_from_payload(owner, recipient, amount).unwrap();
// 		dbg!(buff.len());
// 		assert_eq!(to_test, Binary::from(buff).to_base64())
// 	}
// }
