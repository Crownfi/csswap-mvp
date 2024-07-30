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
 * This enum describes available Token types. ## Examples ``` # use cosmwasm_std::Addr; # use crownfi_astro_common::asset::AssetInfo::{NativeToken, Token}; Token { contract_addr: Addr::unchecked("stake...") }; NativeToken { denom: String::from("uluna") }; ```
 *
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "AssetInfo".
 */
export type AssetInfo =
  | {
      token: {
        contract_addr: Addr;
      };
    }
  | {
      native_token: {
        denom: string;
      };
    };
/**
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "Array_of_Asset".
 */
export type ArrayOf_Asset = Asset[];
/**
 * This enum describes available pair types. ## Available pool types ``` # use crownfi_astro_common::factory::AstroPairType::{Custom, Stable, Xyk}; Xyk {}; Stable {}; Custom(String::from("Custom")); ```
 *
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "AstroPairType".
 */
export type AstroPairType =
  | {
      xyk: {};
    }
  | {
      stable: {};
    }
  | {
      custom: string;
    };
/**
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "Array_of_AstroPairType".
 */
export type ArrayOf_AstroPairType = AstroPairType[];
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
 * @minItems 2
 * @maxItems 2
 *
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "Array_size_2_of_String".
 */
export type ArraySize_2Of_String = [string, string];
/**
 * This structure describes the execute messages of the contract.
 *
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "AstroFactoryExecuteMsg".
 */
export type AstroFactoryExecuteMsg =
  | {
      update_config: {
        /**
         * Contract address to send governance fees to (the Maker)
         */
        fee_address?: string | null;
        /**
         * Whether to prevent the public from creating pairs
         */
        permissioned?: boolean | null;
        /**
         * CW20 token contract code identifier
         */
        token_code_id?: number | null;
      };
    }
  | {
      update_pair_config: {
        /**
         * New [`PairConfig`] settings for a pair type
         */
        config: AstroFactoryPairConfig;
      };
    }
  | {
      create_pair: {
        /**
         * The assets to create the pool for
         */
        asset_infos: AssetInfo[];
        /**
         * Optional binary serialised parameters for custom pool types
         */
        init_params?: Binary | null;
        /**
         * The pair type (exposed in [`PairType`])
         */
        pair_type: AstroPairType;
      };
    }
  | {
      deregister: {
        /**
         * The assets for which we deregister a pool
         */
        asset_infos: AssetInfo[];
      };
    }
  | {
      propose_new_owner: {
        /**
         * The date after which this proposal expires
         */
        expires_in: number;
        /**
         * Newly proposed contract owner
         */
        owner: string;
      };
    }
  | {
      drop_ownership_proposal: {};
    }
  | {
      claim_ownership: {};
    };
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
 * This structure describes the available query messages for the factory contract.
 *
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "AstroFactoryQueryMsg".
 */
export type AstroFactoryQueryMsg =
  | {
      config: {};
    }
  | {
      pair: {
        /**
         * The assets for which we return a pair
         */
        asset_infos: AssetInfo[];
      };
    }
  | {
      pairs: {
        /**
         * The number of pairs to read and return. It is an [`Option`] type.
         */
        limit?: number | null;
        /**
         * The pair item to start reading from. It is an [`Option`] type that accepts [`AssetInfo`] elements.
         */
        start_after?: AssetInfo[] | null;
      };
    }
  | {
      fee_info: {
        /**
         * The pair type for which we return fee information. Pair type is a [`PairType`] struct
         */
        pair_type: AstroPairType;
      };
    }
  | {
      blacklisted_pair_types: {};
    };
/**
 * This structure describes a CW20 hook message.
 *
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "AstroPairCw20HookMsg".
 */
export type AstroPairCw20HookMsg =
  | {
      swap: {
        ask_asset_info?: AssetInfo | null;
        belief_price?: Decimal | null;
        max_spread?: Decimal | null;
        to?: string | null;
      };
    }
  | {
      withdraw_liquidity: {
        assets?: Asset[];
      };
    };
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
 * This structure describes the execute messages available in the contract.
 *
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "AstroPairExecuteMsg".
 */
export type AstroPairExecuteMsg =
  | {
      receive: Cw20ReceiveMsg;
    }
  | {
      provide_liquidity: {
        /**
         * The assets available in the pool
         */
        assets: Asset[];
        /**
         * Determines whether the LP tokens minted for the user is auto_staked in the Generator contract
         */
        auto_stake?: boolean | null;
        /**
         * The receiver of LP tokens
         */
        receiver?: string | null;
        /**
         * The slippage tolerance that allows liquidity provision only if the price in the pool doesn't move too much
         */
        slippage_tolerance?: Decimal | null;
      };
    }
  | {
      swap: {
        ask_asset_info?: AssetInfo | null;
        belief_price?: Decimal | null;
        max_spread?: Decimal | null;
        offer_asset: Asset;
        to?: string | null;
      };
    }
  | {
      update_config: {
        params: Binary;
      };
    }
  | {
      propose_new_owner: {
        /**
         * The date after which this proposal expires
         */
        expires_in: number;
        /**
         * Newly proposed contract owner
         */
        owner: string;
      };
    }
  | {
      drop_ownership_proposal: {};
    }
  | {
      claim_ownership: {};
    };
/**
 * This structure describes the query messages available in the contract.
 *
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "AstroPairQueryMsg".
 */
export type AstroPairQueryMsg =
  | {
      pair: {};
    }
  | {
      pool: {};
    }
  | {
      config: {};
    }
  | {
      share: {
        amount: Uint128;
      };
    }
  | {
      simulation: {
        ask_asset_info?: AssetInfo | null;
        offer_asset: Asset;
      };
    }
  | {
      reverse_simulation: {
        ask_asset: Asset;
        offer_asset_info?: AssetInfo | null;
      };
    }
  | {
      cumulative_prices: {};
    }
  | {
      query_compute_d: {};
    }
  | {
      asset_balance_at: {
        asset_info: AssetInfo;
        block_height: Uint64;
      };
    };
/**
 * A thin wrapper around u64 that is using strings for JSON encoding/decoding, such that the full u64 range can be used for clients that convert JSON numbers to floats, like JavaScript and jq.
 *
 * # Examples
 *
 * Use `from` to create instances of this and `u64` to get the value out:
 *
 * ``` # use cosmwasm_std::Uint64; let a = Uint64::from(42u64); assert_eq!(a.u64(), 42);
 *
 * let b = Uint64::from(70u32); assert_eq!(b.u64(), 70); ```
 *
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "Uint64".
 */
export type Uint64 = string;
/**
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "AstroRouteCw20HookMsg".
 */
export type AstroRouteCw20HookMsg = {
  execute_swap_operations: {
    /**
     * Max spread
     */
    max_spread?: Decimal | null;
    /**
     * The minimum amount of tokens to get from a swap
     */
    minimum_receive?: Uint128 | null;
    /**
     * A vector of swap operations
     */
    operations: AstroRouteSwapOperation[];
    /**
     * The recipient
     */
    to?: string | null;
  };
};
/**
 * This enum describes a swap operation.
 *
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "AstroRouteSwapOperation".
 */
export type AstroRouteSwapOperation =
  | {
      native_swap: {
        /**
         * The name (denomination) of the native asset to swap to
         */
        ask_denom: string;
        /**
         * The name (denomination) of the native asset to swap from
         */
        offer_denom: string;
      };
    }
  | {
      astro_swap: {
        /**
         * Information about the asset we swap to
         */
        ask_asset_info: AssetInfo;
        /**
         * Information about the asset being swapped
         */
        offer_asset_info: AssetInfo;
      };
    };
/**
 * This structure describes the execute messages available in the contract.
 *
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "AstroRouteExecuteMsg".
 */
export type AstroRouteExecuteMsg =
  | {
      receive: Cw20ReceiveMsg;
    }
  | {
      execute_swap_operations: {
        max_spread?: Decimal | null;
        minimum_receive?: Uint128 | null;
        operations: AstroRouteSwapOperation[];
        to?: string | null;
      };
    }
  | {
      execute_swap_operation: {
        max_spread?: Decimal | null;
        operation: AstroRouteSwapOperation;
        single: boolean;
        to?: string | null;
      };
    }
  | {
      assert_minimum_receive: {
        asset_info: AssetInfo;
        minimum_receive: Uint128;
        prev_balance: Uint128;
        receiver: string;
      };
    };
/**
 * This structure describes the query messages available in the contract.
 *
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "AstroRouteQueryMsg".
 */
export type AstroRouteQueryMsg =
  | {
      config: {};
    }
  | {
      simulate_swap_operations: {
        /**
         * The amount of tokens to swap
         */
        offer_amount: Uint128;
        /**
         * The swap operations to perform, each swap involving a specific pool
         */
        operations: AstroRouteSwapOperation[];
      };
    };
/**
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "Nullable_Addr".
 */
export type Nullable_Addr = Addr | null;
/**
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "Nullable_Uint128".
 */
export type Nullable_Uint128 = Uint128 | null;
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
 * This enum describes a Terra asset (native or CW20).
 *
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "Asset".
 */
export interface Asset {
  /**
   * A token amount
   */
  amount: Uint128;
  /**
   * Information about an asset stored in a [`AssetInfo`] struct
   */
  info: AssetInfo;
}
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
 * A custom struct for each query response that returns general contract settings/configs.
 *
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "AstroFactoryConfigResponse".
 */
export interface AstroFactoryConfigResponse {
  /**
   * Address of contract to send governance fees to (the Maker)
   */
  fee_address?: Addr | null;
  /**
   * Addres of owner that is allowed to change contract parameters
   */
  owner: Addr;
  /**
   * IDs of contracts which are allowed to create pairs
   */
  pair_configs: AstroFactoryPairConfig[];
  /**
   * CW20 token contract code identifier
   */
  token_code_id: number;
}
/**
 * This structure stores a pair type's configuration.
 *
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "AstroFactoryPairConfig".
 */
export interface AstroFactoryPairConfig {
  /**
   * ID of contract which is allowed to create pairs of this type
   */
  code_id: number;
  /**
   * Whether a pair type is disabled or not. If it is disabled, new pairs cannot be created, but existing ones can still read the pair configuration
   */
  is_disabled: boolean;
  /**
   * Setting this to true means that pairs of this type will not be able to get an ASTRO generator
   */
  is_generator_disabled: boolean;
  /**
   * The amount of fees (in bps) collected by the Maker contract from this pair type
   */
  maker_fee_bps: number;
  /**
   * The pair type (provided in a [`PairType`])
   */
  pair_type: AstroPairType;
  /**
   * If pool type is permissioned, only factory owner can create pairs of this type. Default is false.
   */
  permissioned?: boolean;
  /**
   * The total fees (in bps) charged by a pair of this type
   */
  total_fee_bps: number;
}
/**
 * A custom struct for each query response that returns an object of type [`FeeInfoResponse`].
 *
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "AstroFactoryFeeInfoResponse".
 */
export interface AstroFactoryFeeInfoResponse {
  /**
   * Contract address to send governance fees to
   */
  fee_address?: Addr | null;
  /**
   * Amount of fees (in bps) sent to the Maker contract
   */
  maker_fee_bps: number;
  /**
   * Total amount of fees (in bps) charged on a swap
   */
  total_fee_bps: number;
}
/**
 * This structure stores the basic settings for creating a new factory contract.
 *
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "AstroFactoryInstantiateMsg".
 */
export interface AstroFactoryInstantiateMsg {
  /**
   * Contract address to send governance fees to (the Maker)
   */
  fee_address?: string | null;
  /**
   * Address of contract that is used to auto_stake LP tokens once someone provides liquidity in a pool
   */
  generator_address?: string | null;
  /**
   * Address of owner that is allowed to change factory contract parameters
   */
  owner: string;
  /**
   * IDs of contracts that are allowed to instantiate pairs
   */
  pair_configs: AstroFactoryPairConfig[];
  /**
   * CW20 token contract code identifier
   */
  token_code_id: number;
}
/**
 * This structure stores the parameters used in a migration message.
 *
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "AstroFactoryMigrateMsg".
 */
export interface AstroFactoryMigrateMsg {
  params: Binary;
}
/**
 * A custom struct for each query response that returns an array of objects of type [`PairInfo`].
 *
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "AstroFactoryPairsResponse".
 */
export interface AstroFactoryPairsResponse {
  /**
   * Arrays of structs containing information about multiple pairs
   */
  pairs: PairInfo[];
}
/**
 * This structure stores the main parameters for an Astroport pair
 *
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "PairInfo".
 */
export interface PairInfo {
  /**
   * Asset information for the assets in the pool
   */
  asset_infos: AssetInfo[];
  /**
   * Pair contract address
   */
  contract_addr: Addr;
  /**
   * Pair LP token address
   */
  liquidity_token: Addr;
  /**
   * The pool type (xyk, stableswap etc) available in [`PairType`]
   */
  pair_type: AstroPairType;
}
/**
 * This struct is used to return a query result with the general contract configuration.
 *
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "AstroPairConfigResponse".
 */
export interface AstroPairConfigResponse {
  /**
   * Last timestamp when the cumulative prices in the pool were updated
   */
  block_time_last: number;
  /**
   * The factory contract address
   */
  factory_addr: Addr;
  /**
   * The contract owner
   */
  owner: Addr;
  /**
   * The pool's parameters
   */
  params?: Binary | null;
}
/**
 * This structure is used to return a cumulative prices query response.
 *
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "AstroPairCumulativePricesResponse".
 */
export interface AstroPairCumulativePricesResponse {
  /**
   * The assets in the pool to query
   */
  assets: Asset[];
  /**
   * The vector contains cumulative prices for each pair of assets in the pool
   */
  cumulative_prices: [AssetInfo, AssetInfo, Uint128][];
  /**
   * The total amount of LP tokens currently issued
   */
  total_share: Uint128;
}
/**
 * Cw20ReceiveMsg should be de/serialized under `Receive()` variant in a ExecuteMsg
 *
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "Cw20ReceiveMsg".
 */
export interface Cw20ReceiveMsg {
  amount: Uint128;
  msg: Binary;
  sender: string;
}
/**
 * This structure describes the parameters used for creating a contract.
 *
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "AstroPairInstantiateMsg".
 */
export interface AstroPairInstantiateMsg {
  /**
   * Information about assets in the pool
   */
  asset_infos: AssetInfo[];
  /**
   * The factory contract address
   */
  factory_addr: string;
  /**
   * Optional binary serialised parameters for custom pool types
   */
  init_params?: Binary | null;
  /**
   * The token contract code ID used for the tokens in the pool
   */
  token_code_id: number;
}
/**
 * This structure describes a migration message. We currently take no arguments for migrations.
 *
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "AstroPairMigrateMsg".
 */
export interface AstroPairMigrateMsg {}
/**
 * This struct is used to return a query result with the total amount of LP tokens and assets in a specific pool.
 *
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "AstroPairPoolResponse".
 */
export interface AstroPairPoolResponse {
  /**
   * The assets in the pool together with asset amounts
   */
  assets: Asset[];
  /**
   * The total amount of LP tokens currently issued
   */
  total_share: Uint128;
}
/**
 * This structure holds the parameters that are returned from a reverse swap simulation response.
 *
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "AstroPairReverseSimulationResponse".
 */
export interface AstroPairReverseSimulationResponse {
  /**
   * The amount of fees charged by the transaction
   */
  commission_amount: Uint128;
  /**
   * The amount of offer assets returned by the reverse swap
   */
  offer_amount: Uint128;
  /**
   * The spread used in the swap operation
   */
  spread_amount: Uint128;
}
/**
 * This structure holds the parameters that are returned from a swap simulation response
 *
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "AstroPairSimulationResponse".
 */
export interface AstroPairSimulationResponse {
  /**
   * The amount of fees charged by the transaction
   */
  commission_amount: Uint128;
  /**
   * The amount of ask assets returned by the swap
   */
  return_amount: Uint128;
  /**
   * The spread used in the swap operation
   */
  spread_amount: Uint128;
}
/**
 * This structure describes a custom struct to return a query response containing the base contract configuration.
 *
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "AstroRouteConfigResponse".
 */
export interface AstroRouteConfigResponse {
  /**
   * The Astroport factory contract address
   */
  astroport_factory: string;
}
/**
 * This structure holds the parameters used for creating a contract.
 *
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "AstroRouteInstantiateMsg".
 */
export interface AstroRouteInstantiateMsg {
  /**
   * The astroport factory contract address
   */
  astroport_factory: string;
}
/**
 * This structure describes a migration message. We currently take no arguments for migrations.
 *
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "AstroRouteMigrateMsg".
 */
export interface AstroRouteMigrateMsg {}
/**
 * This structure describes a custom struct to return a query response containing the end amount of a swap simulation
 *
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "AstroRouteSimulateSwapOperationsResponse".
 */
export interface AstroRouteSimulateSwapOperationsResponse {
  /**
   * The amount of tokens received in a swap simulation
   */
  amount: Uint128;
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
