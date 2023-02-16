use crate::contract::Contract;

pub mod contract;
pub mod state;

use crate::state::{InitParams, MigrateMsg};
use astroport::pair::InstantiateMsg;
use astroport::pair_bonded::{ExecuteMsg, QueryMsg};
use astroport_pair_bonded::base::PairBonded;
use astroport_pair_bonded::error::ContractError;
use cosmwasm_std::{
    entry_point, from_binary, Binary, Deps, DepsMut, Env, MessageInfo, Response, StdResult,
};

/// Creates a new contract with the specified parameters in [`InstantiateMsg`].
#[cfg_attr(not(feature = "library"), entry_point)]
pub fn instantiate(
    deps: DepsMut,
    env: Env,
    info: MessageInfo,
    msg: InstantiateMsg,
) -> Result<Response, ContractError> {
    if let Some(ser_init_params) = &msg.init_params {
        let init_params: InitParams = from_binary(ser_init_params)?;
        let contract = Contract::new("params");
        contract
            .params
            .save(deps.storage, &init_params.try_into_params(deps.api)?)?;
        contract.instantiate(deps, env, info, msg)
    } else {
        Err(ContractError::InitParamsNotFound {})
    }
}

/// Exposes all the execute functions available in the contract via a pair-bonded template.
#[cfg_attr(not(feature = "library"), entry_point)]
pub fn execute(
    deps: DepsMut,
    env: Env,
    info: MessageInfo,
    msg: ExecuteMsg,
) -> Result<Response, ContractError> {
    let contract = Contract::new("params");
    contract.execute(deps, env, info, msg)
}

/// Exposes all the queries available in the contract via a pair-bonded template.
#[cfg_attr(not(feature = "library"), entry_point)]
pub fn query(deps: Deps, env: Env, msg: QueryMsg) -> StdResult<Binary> {
    let contract = Contract::new("params");
    contract.query(deps, env, msg)
}

/// Manages contract migration
#[cfg_attr(not(feature = "library"), entry_point)]
pub fn migrate(_deps: DepsMut, _env: Env, _msg: MigrateMsg) -> Result<Response, ContractError> {
    Ok(Response::default())
}