/* eslint-disable */
/**
 * This file was automatically generated by crownfi-sei-sdk-autogen.
 * DO NOT MODIFY IT BY HAND.
 * The Rust definition of the associated structs is the source of truth!!
 */

/**
 * A human readable address.
 *
 * In Cosmos, this is typically bech32 encoded. But for multi-chain smart contracts no assumptions should be made other than being UTF-8 encoded and of reasonable length.
 *
 * This type represents a validated address. It can be created in the following ways 1. Use `Addr::unchecked(input)` 2. Use `let checked: Addr = deps.api.addr_validate(input)?` 3. Use `let checked: Addr = deps.api.addr_humanize(canonical_addr)?` 4. Deserialize from JSON. This must only be done from JSON that was validated before such as a contract's state. `Addr` must not be used in messages sent by the user because this would result in unvalidated instances.
 *
 * This type is immutable. If you really need to mutate it (Really? Are you sure?), create a mutable copy using `let mut mutable = Addr::to_string()` and operate on that `String` instance.
 *
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "Addr".
 */
export type Addr = string;
/**
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "Array_of_PoolFactoryCreatedPair".
 */
export type ArrayOf_PoolFactoryCreatedPair = PoolFactoryCreatedPair[];
/**
 * @minItems 2
 * @maxItems 2
 *
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "Array_size_2_of_Coin".
 */
export type ArraySize_2Of_Coin = [Coin, Coin];
/**
 * A thin wrapper around u128 that is using strings for JSON encoding/decoding, such that the full u128 range can be used for clients that convert JSON numbers to floats, like JavaScript and jq.
 *
 * # Examples
 *
 * Use `from` to create instances of this and `u128` to get the value out:
 *
 * ``` # use cosmwasm_std::Uint128; let a = Uint128::from(123u128); assert_eq!(a.u128(), 123);
 *
 * let b = Uint128::from(42u64); assert_eq!(b.u128(), 42);
 *
 * let c = Uint128::from(70u32); assert_eq!(c.u128(), 70); ```
 *
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "Uint128".
 */
export type Uint128 = string;
/**
 * @minItems 2
 * @maxItems 2
 *
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "Array_size_2_of_String".
 */
export type ArraySize_2Of_String = [string, string];
/**
 * Binary is a wrapper around Vec<u8> to add base64 de/serialization with serde. It also adds some helper methods to help encode inline.
 *
 * This is only needed as serde-json-{core,wasm} has a horrible encoding for Vec<u8>. See also <https://github.com/CosmWasm/cosmwasm/blob/main/docs/MESSAGE_TYPES.md>.
 *
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "Binary".
 */
export type Binary = string;
/**
 * A fixed-point decimal value with 18 fractional digits, i.e. Decimal(1_000_000_000_000_000_000) == 1.0
 *
 * The greatest possible value that can be represented is 340282366920938463463.374607431768211455 (which is (2^128 - 1) / 10^18)
 *
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "Decimal".
 */
export type Decimal = string;
/**
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "Nullable_Addr".
 */
export type Nullable_Addr = Addr | null;
/**
 * This structure describes the execute messages of the contract.
 *
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "PoolFactoryExecuteMsg".
 */
export type PoolFactoryExecuteMsg =
  | {
      update_config: {
        /**
         * The head honcho
         */
        admin?: Addr | null;
        /**
         * The amount of fees (in bps) collected by the Maker contract from this pair type
         */
        default_maker_fee_bps?: number | null;
        /**
         * The total fees (in bps) charged by a pair of this type
         */
        default_total_fee_bps?: number | null;
        /**
         * Where to put the maker fees, set to "sei1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq703fpu" to disable.
         */
        fee_receiver?: Addr | null;
        /**
         * Code to use when instantiating new pool pairs
         */
        pair_code_id?: number | null;
        /**
         * If true, everyone will be able to create new trading pairs
         */
        permissionless_pool_cration?: boolean | null;
      };
    }
  | {
      create_pool: {
        initial_shares_receiver?: Addr | null;
        /**
         * As funds must be given in alphabetical order, this is used to determine whether or not the pair should be inversed when presented to the user
         */
        left_denom: string;
      };
    }
  | {
      update_fees_for_pool: {
        maker_fee_bps?: number | null;
        /**
         * @minItems 2
         * @maxItems 2
         */
        pair: [string, string];
        total_fee_bps?: number | null;
      };
    }
  | {
      update_global_config_for_pool: {
        /**
         * @minItems 2
         * @maxItems 2
         */
        after?: [string, string] | null;
        limit?: number | null;
      };
    };
/**
 * This structure describes the available query messages for the factory contract.
 *
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "PoolFactoryQueryMsg".
 */
export type PoolFactoryQueryMsg =
  | {
      config: {};
    }
  | {
      pair_addr: {
        /**
         * @minItems 2
         * @maxItems 2
         */
        pair: [string, string];
      };
    }
  | {
      pairs: {
        /**
         * @minItems 2
         * @maxItems 2
         */
        after?: [string, string] | null;
        limit?: number | null;
      };
    };
/**
 * This structure describes the execute messages available in the contract.
 *
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "PoolPairExecuteMsg".
 */
export type PoolPairExecuteMsg =
  | {
      update_config: {
        /**
         * The head honcho, this is usually the factory contract
         */
        admin?: Addr | null;
        /**
         * If true, this has been endorsed by the admin.
         */
        endorsed?: boolean | null;
        /**
         * Where to put the maker fees, set to "sei1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq703fpu" to disable.
         */
        fee_receiver?: Addr | null;
        /**
         * The amount of fees (in bps) collected by the Maker contract from this pair type
         */
        maker_fee_bps?: number | null;
        /**
         * The total fees (in bps) charged by a pair of this type
         */
        total_fee_bps?: number | null;
      };
    }
  | {
      provide_liquidity: {
        /**
         * The receiver of pool share
         */
        receiver?: Addr | null;
        /**
         * If the receiver is a contract, you can execute it by passing the encoded message here verbatim.
         */
        receiver_payload?: Binary | null;
        /**
         * The slippage tolerance that allows liquidity provision only if the price in the pool doesn't move too much
         */
        slippage_tolerance?: Decimal | null;
      };
    }
  | {
      withdraw_liquidity: {
        /**
         * The receiver of the share value
         */
        receiver?: Addr | null;
        /**
         * If the receiver is a contract, you can execute it by passing the encoded message here verbatim.
         */
        receiver_payload?: Binary | null;
      };
    }
  | {
      withdraw_and_split_liquidity: {
        /**
         * The receiver of the share value
         */
        left_coin_receiver?: Addr | null;
        /**
         * If the receiver is a contract, you can execute it by passing the encoded message here verbatim.
         */
        left_coin_receiver_payload?: Binary | null;
        /**
         * The receiver of the share value
         */
        right_coin_receiver?: Addr | null;
        /**
         * If the receiver is a contract, you can execute it by passing the encoded message here verbatim.
         */
        right_coin_receiver_payload?: Binary | null;
      };
    }
  | {
      swap: {
        /**
         * The expected amount after swap, before fees are taken. By default this will be `incoming_coin * exchange_rate`
         */
        expected_result?: Uint128 | null;
        /**
         * The account receiving the payout
         */
        receiver?: Addr | null;
        /**
         * If the receiver is a contract, you can execute it by passing the encoded message here verbatim.
         */
        receiver_payload?: Binary | null;
        /**
         * A value between 0 and 1 determining the difference tolerance between `expected_result` and the actual result of the swap before fees. e.g. 0.1 means a 10% slippage tolerance. By default this will be to 0.5%.
         */
        slippage_tolerance?: Decimal | null;
      };
    };
/**
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "PoolPairQueryMsg".
 */
export type PoolPairQueryMsg =
  | "pair_denoms"
  | "canonical_pair_denoms"
  | "pair_identifier"
  | "canonical_pair_identifier"
  | "config"
  | "total_shares"
  | {
      share_value: {
        amount: Uint128;
      };
    }
  | {
      simulate_provide_liquidity: {
        /**
         * @minItems 2
         * @maxItems 2
         */
        offer: [Coin, Coin];
      };
    }
  | {
      simulate_swap: {
        offer: Coin;
      };
    }
  | {
      simulate_naive_swap: {
        offer: Coin;
      };
    }
  | {
      hourly_volume_sum: {
        past_hours?: number | null;
      };
    }
  | {
      daily_volume_sum: {
        past_days?: number | null;
      };
    }
  | {
      total_volume_sum: {};
    };
/**
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "String".
 */
export type String = string;
/**
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "SwapRouterExecuteMsg".
 */
export type SwapRouterExecuteMsg =
  | {
      execute_swaps: {
        /**
         * If you want the swap to fail due to an excessive difference between what you're expecting and what you're getting, specify your terms here.
         */
        expectation?: SwapRouterExpectation | null;
        /**
         * The slippage tolerance for each step of the way, default value is at the each swapper's discretion, though the CrownFi swap contracts have a default of 0.5%.
         */
        intermediate_slippage_tolerance?: Decimal | null;
        /**
         * The account receiving the resulting asset, defaults to the sender.
         */
        receiver?: Addr | null;
        /**
         * The contract(s) to use to execute the swaps
         */
        swappers: Addr[];
        /**
         * If the resulting denom wraps another asset, use this contract to unwrap it
         */
        unwrapper?: Addr | null;
      };
    }
  | {
      next_step: {};
    };
/**
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "SwapRouterQueryMsg".
 */
export type SwapRouterQueryMsg = {
  simulate_swaps: {
    offer: Coin;
    swappers: Addr[];
  };
};

export interface CrownfiSdkMakerAutogen {}
/**
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "PoolFactoryCreatedPair".
 */
export interface PoolFactoryCreatedPair {
  address: Addr;
  /**
   * @minItems 2
   * @maxItems 2
   */
  canonical_pair: [string, string];
}
/**
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "Coin".
 */
export interface Coin {
  amount: Uint128;
  denom: string;
}
/**
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "PoolFactoryConfigJsonable".
 */
export interface PoolFactoryConfigJsonable {
  /**
   * The head honcho
   */
  admin: Addr;
  /**
   * The amount of fees (in bps) collected by the Maker contract from this pair type
   */
  default_maker_fee_bps: number;
  /**
   * The total fees (in bps) charged by a pair of this type
   */
  default_total_fee_bps: number;
  /**
   * Where to put the maker fees, set to "sei1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq703fpu" to disable.
   */
  fee_receiver: Addr;
  /**
   * Code to use when instantiating new pool pairs
   */
  pair_code_id: number;
  /**
   * If true, everyone will be able to create new trading pairs
   */
  permissionless_pool_cration: boolean;
}
/**
 * This structure stores the basic settings for creating a new factory contract.
 *
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "PoolFactoryInstantiateMsg".
 */
export interface PoolFactoryInstantiateMsg {
  config: PoolFactoryConfigJsonable;
}
/**
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "PoolPairCalcNaiveSwapResult".
 */
export interface PoolPairCalcNaiveSwapResult {
  /**
   * How much CrownFi is skimming off the top
   */
  maker_fee_amount: Uint128;
  /**
   * The amount of coin after the swap, minus the `total_fee_amount`.
   */
  result_amount: Uint128;
  /**
   * `maker_fee_amount + liquidity_provider_fee_amount`
   */
  total_fee_amount: Uint128;
}
/**
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "PoolPairCalcSwapResult".
 */
export interface PoolPairCalcSwapResult {
  /**
   * How much CrownFi is skimming off the top
   */
  maker_fee_amount: Uint128;
  /**
   * The amount of coin after the swap, minus the `total_fee_amount`.
   */
  result_amount: Uint128;
  /**
   * The discrepancy between `result_amount + total_fee_amount` and `incoming_amount * exchange_rate`
   */
  spread_amount: Uint128;
  /**
   * `maker_fee_amount + liquidity_provider_fee_amount`
   */
  total_fee_amount: Uint128;
}
/**
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "PoolPairConfigJsonable".
 */
export interface PoolPairConfigJsonable {
  /**
   * The head honcho, this is usually the factory contract
   */
  admin: Addr;
  /**
   * If true, this has been endorsed by the market maker (probably CrownFi)
   */
  endorsed: boolean;
  /**
   * Where to put the maker fees, set to "sei1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq703fpu" to disable.
   */
  fee_receiver: Addr;
  /**
   * If true, this is marketed as the inverse pair
   */
  inverse: boolean;
  /**
   * The amount of fees (in bps) collected by the Maker contract from this pair type
   */
  maker_fee_bps: number;
  /**
   * The total fees (in bps) charged by a pair of this type
   */
  total_fee_bps: number;
}
/**
 * This structure stores the basic settings for creating a new factory contract.
 *
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "PoolPairInstantiateMsg".
 */
export interface PoolPairInstantiateMsg {
  config: PoolPairConfigJsonable;
  shares_receiver: Addr;
}
/**
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "PoolPairQuerySimulateDepositResponse".
 */
export interface PoolPairQuerySimulateDepositResponse {
  share_amount: Uint128;
  /**
   * @minItems 2
   * @maxItems 2
   */
  share_value: [Coin, Coin];
}
/**
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "SwapRouterExpectation".
 */
export interface SwapRouterExpectation {
  /**
   * The amount of the resulting asset you expect to receive after all swaps are done and all fees are taken. (Not including network gas fees).
   */
  expected_amount: Uint128;
  /**
   * A value between 0 and 1 determining the difference tolerance between `expected_result` and the actual result. For example, 0.1 means a 10% slippage tolerance.
   */
  slippage_tolerance: Decimal;
}
/**
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "SwapRouterInstantiateMsg".
 */
export interface SwapRouterInstantiateMsg {}
/**
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "SwapRouterSimulateSwapsResponse".
 */
export interface SwapRouterSimulateSwapsResponse {
  /**
   * The final amount received.
   */
  result_amount: Uint128;
  /**
   * The denom receieved.
   */
  result_denom: string;
  /**
   * The difference between the "actual result" and the "naive result", i.e. assuming the swaps would have 0 affect on the exchange rate while still considering the swap fees.
   */
  slip_amount: Uint128;
}
/**
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "VolumeQueryResponse".
 */
export interface VolumeQueryResponse {
  from_timestamp_ms: number;
  to_timestamp_ms: number;
  /**
   * @minItems 2
   * @maxItems 2
   */
  volume: [Uint128, Uint128];
}
