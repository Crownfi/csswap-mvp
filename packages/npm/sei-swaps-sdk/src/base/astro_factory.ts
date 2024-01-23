/* eslint-disable */
/**
 * This file was automatically generated by crownfi-sei-sdk-autogen.
 * DO NOT MODIFY IT BY HAND.
 * The Rust definition of the associated structs is the source of truth!!
 */
import {ArrayOf_AstroPairType, AssetInfo, AstroFactoryConfigResponse, AstroFactoryExecuteMsg, AstroFactoryFeeInfoResponse, AstroFactoryPairConfig, AstroFactoryPairsResponse, AstroFactoryQueryMsg, AstroPairType, Binary, PairInfo} from "./types.js";
import {Coin} from "@cosmjs/amino";
import {ExecuteInstruction} from "@cosmjs/cosmwasm-stargate";
import {ContractBase} from "@crownfi/sei-utils";
export class AstroFactoryContract extends ContractBase {
	queryConfig(): Promise<AstroFactoryConfigResponse> {
		const msg = {"config": {}} satisfies AstroFactoryQueryMsg;
		return this.query(msg);
	}
	queryPair(args: {"asset_infos": AssetInfo[]}): Promise<PairInfo> {
		const msg = {"pair": args} satisfies AstroFactoryQueryMsg;
		return this.query(msg);
	}
	queryPairs(args: {"limit"?: number | null, "start_after"?: AssetInfo[]} = {}): Promise<AstroFactoryPairsResponse> {
		const msg = {"pairs": args} satisfies AstroFactoryQueryMsg;
		return this.query(msg);
	}
	queryFeeInfo(args: {"pair_type": AstroPairType}): Promise<AstroFactoryFeeInfoResponse> {
		const msg = {"fee_info": args} satisfies AstroFactoryQueryMsg;
		return this.query(msg);
	}
	queryBlacklistedPairTypes(): Promise<ArrayOf_AstroPairType> {
		const msg = {"blacklisted_pair_types": {}} satisfies AstroFactoryQueryMsg;
		return this.query(msg);
	}
	buildUpdateConfigIx(args: {"fee_address"?: string | null, "token_code_id"?: number | null} = {}, funds?: Coin[]): ExecuteInstruction {
		const msg = {"update_config": args} satisfies AstroFactoryExecuteMsg;
		return this.executeIx(msg, funds);
	}
	buildUpdatePairConfigIx(args: {"config": AstroFactoryPairConfig}, funds?: Coin[]): ExecuteInstruction {
		const msg = {"update_pair_config": args} satisfies AstroFactoryExecuteMsg;
		return this.executeIx(msg, funds);
	}
	buildCreatePairIx(args: {"asset_infos": AssetInfo[], "init_params"?: Binary | null, "pair_type": AstroPairType}, funds?: Coin[]): ExecuteInstruction {
		const msg = {"create_pair": args} satisfies AstroFactoryExecuteMsg;
		return this.executeIx(msg, funds);
	}
	buildDeregisterIx(args: {"asset_infos": AssetInfo[]}, funds?: Coin[]): ExecuteInstruction {
		const msg = {"deregister": args} satisfies AstroFactoryExecuteMsg;
		return this.executeIx(msg, funds);
	}
	buildProposeNewOwnerIx(args: {"expires_in": number, "owner": string}, funds?: Coin[]): ExecuteInstruction {
		const msg = {"propose_new_owner": args} satisfies AstroFactoryExecuteMsg;
		return this.executeIx(msg, funds);
	}
	buildDropOwnershipProposalIx(funds?: Coin[]): ExecuteInstruction {
		const msg = {"drop_ownership_proposal": {}} satisfies AstroFactoryExecuteMsg;
		return this.executeIx(msg, funds);
	}
	buildClaimOwnershipIx(funds?: Coin[]): ExecuteInstruction {
		const msg = {"claim_ownership": {}} satisfies AstroFactoryExecuteMsg;
		return this.executeIx(msg, funds);
	}
}
