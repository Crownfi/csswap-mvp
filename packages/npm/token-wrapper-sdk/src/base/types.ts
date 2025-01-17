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
 * Binary is a wrapper around Vec<u8> to add base64 de/serialization with serde. It also adds some helper methods to help encode inline.
 *
 * This is only needed as serde-json-{core,wasm} has a horrible encoding for Vec<u8>. See also <https://github.com/CosmWasm/cosmwasm/blob/main/docs/MESSAGE_TYPES.md>.
 *
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "Binary".
 */
export type Binary = string;
/**
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "CW20WrapperExecMsg".
 */
export type CW20WrapperExecMsg =
  | {
      receive: Cw20ReceiveMsg;
    }
  | {
      unwrap: {
        receiver?: Addr | null;
      };
    };
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
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "CW20WrapperQueryMsg".
 */
export type CW20WrapperQueryMsg =
  | {
      unwrapped_addr_of: {
        denom: string;
      };
    }
  | {
      wrapped_denom_of: {
        cw20: Addr;
      };
    };
/**
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "ERC20WrapperExecMsg".
 */
export type ERC20WrapperExecMsg =
  | {
      wrap: {
        amount: Uint128;
        evm_sender: Binary;
        recipient?: Addr | null;
        token_addr: string;
      };
    }
  | {
      unwrap: {
        evm_recipient: Binary;
      };
    };
/**
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "EmptyQuery".
 */
export type EmptyQuery = {
  empty: {};
};
/**
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "Nullable_Addr".
 */
export type Nullable_Addr = Addr | null;
/**
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "Nullable_String".
 */
export type Nullable_String = string | null;

export interface CrownfiSdkMakerAutogen {}
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
 * An empty struct that serves as a placeholder in different places, such as contracts that don't set a custom message.
 *
 * It is designed to be expressable in correct JSON and JSON Schema but contains no meaningful data. Previously we used enums without cases, but those cannot represented as valid JSON Schema (https://github.com/CosmWasm/cosmwasm/issues/451)
 *
 * This interface was referenced by `CrownfiSdkMakerAutogen`'s JSON-Schema
 * via the `definition` "Empty".
 */
export interface Empty {}
