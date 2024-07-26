/* eslint-disable */
/**
 * This file was automatically generated by crownfi-sei-sdk-autogen.
 * DO NOT MODIFY IT BY HAND.
 * The Rust definition of the associated structs is the source of truth!!
 */
import {ArrayOf_Asset, Asset, AssetInfo, AstroPairConfigResponse, AstroPairCumulativePricesResponse, AstroPairCw20HookMsg, AstroPairExecuteMsg, AstroPairPoolResponse, AstroPairQueryMsg, AstroPairReverseSimulationResponse, AstroPairSimulationResponse, Binary, Cw20ReceiveMsg, Decimal, Nullable_Uint128, PairInfo, Uint128, Uint64} from "./types.js";
import {Coin} from "@cosmjs/amino";
import {ExecuteInstruction, WasmExtension} from "@cosmjs/cosmwasm-stargate";
import {QueryClient} from "@cosmjs/stargate";
import {ContractBase} from "@crownfi/sei-utils";
export class AstroPairContract<Q extends QueryClient & WasmExtension> extends ContractBase<Q> {
	/** Returns information about a pair in an object of type [`super::asset::PairInfo`]. */
	queryPair(): Promise<PairInfo> {
		const msg = {"pair": {}} satisfies AstroPairQueryMsg;
		return this.query(msg);
	}
	/** Returns information about a pool in an object of type [`PoolResponse`]. */
	queryPool(): Promise<AstroPairPoolResponse> {
		const msg = {"pool": {}} satisfies AstroPairQueryMsg;
		return this.query(msg);
	}
	/** Returns contract configuration settings in a custom [`ConfigResponse`] structure. */
	queryConfig(): Promise<AstroPairConfigResponse> {
		const msg = {"config": {}} satisfies AstroPairQueryMsg;
		return this.query(msg);
	}
	/** Returns information about the share of the pool in a vector that contains objects of type [`Asset`]. */
	queryShare(args: {
		"amount": Uint128
	}): Promise<ArrayOf_Asset> {
		const msg = {"share": args} satisfies AstroPairQueryMsg;
		return this.query(msg);
	}
	/** Returns information about a swap simulation in a [`SimulationResponse`] object. */
	querySimulation(args: {
		"ask_asset_info"?: AssetInfo | null,
		"offer_asset": Asset
	}): Promise<AstroPairSimulationResponse> {
		const msg = {"simulation": args} satisfies AstroPairQueryMsg;
		return this.query(msg);
	}
	/** Returns information about cumulative prices in a [`ReverseSimulationResponse`] object. */
	queryReverseSimulation(args: {
		"ask_asset": Asset,
		"offer_asset_info"?: AssetInfo | null
	}): Promise<AstroPairReverseSimulationResponse> {
		const msg = {"reverse_simulation": args} satisfies AstroPairQueryMsg;
		return this.query(msg);
	}
	/** Returns information about the cumulative prices in a [`CumulativePricesResponse`] object */
	queryCumulativePrices(): Promise<AstroPairCumulativePricesResponse> {
		const msg = {"cumulative_prices": {}} satisfies AstroPairQueryMsg;
		return this.query(msg);
	}
	/** Returns current D invariant in as a [`u128`] value */
	queryQueryComputeD(): Promise<Uint128> {
		const msg = {"query_compute_d": {}} satisfies AstroPairQueryMsg;
		return this.query(msg);
	}
	/** Returns the balance of the specified asset that was in the pool just preceeding the moment of the specified block height creation. */
	queryAssetBalanceAt(args: {
		"asset_info": AssetInfo,
		"block_height": Uint64
	}): Promise<Nullable_Uint128> {
		const msg = {"asset_balance_at": args} satisfies AstroPairQueryMsg;
		return this.query(msg);
	}
	/** Receives a message of type [`Cw20ReceiveMsg`] */
	buildReceiveIx(args: Cw20ReceiveMsg, funds?: Coin[]): ExecuteInstruction {
		const msg = {"receive": args} satisfies AstroPairExecuteMsg;
		return this.executeIx(msg, funds);
	}
	/** ProvideLiquidity allows someone to provide liquidity in the pool */
	buildProvideLiquidityIx(args: {
		/** The assets available in the pool */
		"assets": Asset[],
		/** Determines whether the LP tokens minted for the user is auto_staked in the Generator contract */
		"auto_stake"?: boolean | null,
		/** The receiver of LP tokens */
		"receiver"?: string | null,
		/** The slippage tolerance that allows liquidity provision only if the price in the pool doesn't move too much */
		"slippage_tolerance"?: Decimal | null
	}, funds?: Coin[]): ExecuteInstruction {
		const msg = {"provide_liquidity": args} satisfies AstroPairExecuteMsg;
		return this.executeIx(msg, funds);
	}
	/** Swap performs a swap in the pool */
	buildSwapIx(args: {
		"ask_asset_info"?: AssetInfo | null,
		"belief_price"?: Decimal | null,
		"max_spread"?: Decimal | null,
		"offer_asset": Asset,
		"to"?: string | null
	}, funds?: Coin[]): ExecuteInstruction {
		const msg = {"swap": args} satisfies AstroPairExecuteMsg;
		return this.executeIx(msg, funds);
	}
	/** Update the pair configuration */
	buildUpdateConfigIx(args: {
		"params": Binary
	}, funds?: Coin[]): ExecuteInstruction {
		const msg = {"update_config": args} satisfies AstroPairExecuteMsg;
		return this.executeIx(msg, funds);
	}
	/** ProposeNewOwner creates a proposal to change contract ownership. The validity period for the proposal is set in the `expires_in` variable. */
	buildProposeNewOwnerIx(args: {
		/** The date after which this proposal expires */
		"expires_in": number,
		/** Newly proposed contract owner */
		"owner": string
	}, funds?: Coin[]): ExecuteInstruction {
		const msg = {"propose_new_owner": args} satisfies AstroPairExecuteMsg;
		return this.executeIx(msg, funds);
	}
	/** DropOwnershipProposal removes the existing offer to change contract ownership. */
	buildDropOwnershipProposalIx(funds?: Coin[]): ExecuteInstruction {
		const msg = {"drop_ownership_proposal": {}} satisfies AstroPairExecuteMsg;
		return this.executeIx(msg, funds);
	}
	/** Used to claim contract ownership. */
	buildClaimOwnershipIx(funds?: Coin[]): ExecuteInstruction {
		const msg = {"claim_ownership": {}} satisfies AstroPairExecuteMsg;
		return this.executeIx(msg, funds);
	}
	/** Swap a given amount of asset */
	buildSwapCw20Ix(tokenContractOrUnifiedDenom: string, amount: string | bigint | number, args: {
		"ask_asset_info"?: AssetInfo | null,
		"belief_price"?: Decimal | null,
		"max_spread"?: Decimal | null,
		"to"?: string | null
	} = {}): ExecuteInstruction {
		const msg = {"swap": args} satisfies AstroPairCw20HookMsg;
		return this.executeIxCw20(msg, tokenContractOrUnifiedDenom, amount);
	}
	/** Withdraw liquidity from the pool */
	buildWithdrawLiquidityCw20Ix(tokenContractOrUnifiedDenom: string, amount: string | bigint | number, args: {
		"assets"?: Asset[]
	} = {}): ExecuteInstruction {
		const msg = {"withdraw_liquidity": args} satisfies AstroPairCw20HookMsg;
		return this.executeIxCw20(msg, tokenContractOrUnifiedDenom, amount);
	}
}