use bitflags::bitflags;
use bytemuck::{Pod, Zeroable};
use cosmwasm_std::{Addr, StdError};
use crownfi_cw_common::{
	data_types::canonical_addr::SeiCanonicalAddr,
	impl_serializable_as_ref,
	storage::{item::StoredItem, map::StoredMap, OZeroCopy, SerializableItem},
};
use crownfi_swaps_common::data_types::pair_id::CanonicalPoolPairIdentifier;
use schemars::JsonSchema;
use serde::{Deserialize, Serialize};

const MAX_TOTAL_FEE_BPS: u16 = 10_000;

pub const CONFIG_NAMESPACE: &str = "app_cfg";
bitflags! {
	/// Represents a set of flags. Note that the numeric type may grow in a minor version change
	#[derive(Debug, Clone, Copy, PartialEq, Eq, PartialOrd, Ord, Hash, Zeroable, Pod)]
	#[repr(transparent)]
	pub struct PoolFactoryConfigFlags: u8 {
		/// If true, everyone will be able to create new trading pairs
		const PERMISSIONLESS_POOL_CRATION = 0b00000001u8;
	}
}

#[derive(Debug, Clone, Copy, PartialEq, Eq, Zeroable, Pod)]
#[repr(C)]
pub struct PoolFactoryConfig {
	/// The head honcho
	pub admin: SeiCanonicalAddr,
	/// Where to put the maker fees, set to "sei1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq703fpu" to disable.
	pub fee_receiver: SeiCanonicalAddr,
	/// Code to use when instantiating new pool pairs
	pub pair_code_id: u64,
	_unused_1: [u8; 32], // More possible code id configs
	/// The total fees (in bps) charged by a pair of this type
	pub default_total_fee_bps: u16,
	/// The amount of fees (in bps) collected by the Maker contract from this pair type
	pub default_maker_fee_bps: u16,
	_unused_2: [u8; 4], // Possible lower-bound fees
	/// Collection of boolean values
	pub flags: PoolFactoryConfigFlags, // Possible lower-bound fees
	_unused_3: [u8; 7], // bit flags may be extended upon (plus we need the padding)
}

#[derive(Debug, Serialize, Deserialize, Clone, PartialEq, Eq, JsonSchema)]
pub struct PoolFactoryConfigJsonable {
	/// The head honcho
	pub admin: Addr,
	/// Where to put the maker fees, set to "sei1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq703fpu" to disable.
	pub fee_receiver: Addr,
	/// Code to use when instantiating new pool pairs
	pub pair_code_id: u64,
	/// The total fees (in bps) charged by a pair of this type
	pub default_total_fee_bps: u16,
	/// The amount of fees (in bps) collected by the Maker contract from this pair type
	pub default_maker_fee_bps: u16,
	/// If true, everyone will be able to create new trading pairs
	pub permissionless_pool_cration: bool,
}

impl_serializable_as_ref!(PoolFactoryConfig);
impl StoredItem for PoolFactoryConfig {
	fn namespace() -> &'static [u8] {
		CONFIG_NAMESPACE.as_bytes()
	}
}
impl PoolFactoryConfig {
	pub fn load_non_empty() -> Result<OZeroCopy<Self>, StdError>
	where
		Self: Sized,
	{
		match Self::load()? {
			Some(result) => Ok(result),
			None => Err(StdError::NotFound {
				kind: "PoolFactoryConfig".into(),
			}),
		}
	}
	pub fn valid_fee_bps(&self) -> bool {
		self.default_total_fee_bps <= MAX_TOTAL_FEE_BPS && self.default_maker_fee_bps <= self.default_total_fee_bps
	}
}
impl TryFrom<&PoolFactoryConfigJsonable> for PoolFactoryConfig {
	type Error = StdError;
	fn try_from(value: &PoolFactoryConfigJsonable) -> Result<Self, Self::Error> {
		let mut flags = PoolFactoryConfigFlags::empty();
		if value.permissionless_pool_cration {
			flags = flags.union(PoolFactoryConfigFlags::PERMISSIONLESS_POOL_CRATION);
		}
		Ok(PoolFactoryConfig {
			admin: (&value.admin).try_into()?,
			fee_receiver: (&value.fee_receiver).try_into()?,
			pair_code_id: value.pair_code_id,
			default_total_fee_bps: value.default_total_fee_bps,
			default_maker_fee_bps: value.default_maker_fee_bps,
			flags,
			..Zeroable::zeroed()
		})
	}
}
impl TryFrom<&PoolFactoryConfig> for PoolFactoryConfigJsonable {
	type Error = StdError;

	fn try_from(value: &PoolFactoryConfig) -> Result<Self, Self::Error> {
		Ok(PoolFactoryConfigJsonable {
			admin: value.admin.try_into()?,
			fee_receiver: value.fee_receiver.try_into()?,
			pair_code_id: value.pair_code_id,
			default_total_fee_bps: value.default_total_fee_bps,
			default_maker_fee_bps: value.default_maker_fee_bps,
			permissionless_pool_cration: value
				.flags
				.contains(PoolFactoryConfigFlags::PERMISSIONLESS_POOL_CRATION),
		})
	}
}

const POOL_ADDRESSES_NAMESPACE: &str = "pools";
pub fn get_pool_addresses_store() -> StoredMap<CanonicalPoolPairIdentifier, SeiCanonicalAddr> {
	StoredMap::new(POOL_ADDRESSES_NAMESPACE.as_ref())
}
