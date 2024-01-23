use crate::state::{CONFIG, PAIR_CONFIGS};
use crownfi_astro_common::factory::{AstroFactoryConfig, AstroFactoryPairConfig, AstroPairType};
use cosmwasm_schema::cw_serde;
use cosmwasm_std::{Addr, DepsMut, StdError, StdResult, Storage};
use cw_storage_plus::{Item, Map};

/// This structure describes a contract migration message.
#[cw_serde]
pub struct MigrationMsg {
    /// The address of the contract that contains native coins with their precisions
    pub coin_registry_address: String,
}

/// This structure holds the main parameters for the factory contract.
#[cw_serde]
pub struct ConfigV120 {
    /// Address allowed to change contract parameters
    pub owner: Addr,
    /// CW20 token contract code identifier
    pub token_code_id: u64,
    /// Generator contract address
    pub generator_address: Option<Addr>,
    /// Contract address to send governance fees to (the Maker contract)
    pub fee_address: Option<Addr>,
}

pub const CONFIG_V120: Item<ConfigV120> = Item::new("config");

/// Migrate config
pub fn migrate_configs(deps: &mut DepsMut, _msg: &MigrationMsg) -> StdResult<()> {
    let old_cfg = CONFIG_V120.load(deps.storage)?;

    let new_config = AstroFactoryConfig {
        owner: old_cfg.owner,
        token_code_id: old_cfg.token_code_id,
        // generator_address: old_cfg.generator_address,
        fee_address: old_cfg.fee_address,
    };

    CONFIG.save(deps.storage, &new_config)
}

#[cw_serde]
pub enum OldPairType {
    /// XYK pair type
    Xyk {},
    /// Stable pair type
    Stable {},
    /// Concentrated liquidity pair type
    Concentrated {},
    /// Custom pair type
    Custom(String),
}

/// This structure describes a pair's configuration.
#[cw_serde]
pub struct OldPairConfig {
    pub code_id: u64,
    pub pair_type: OldPairType,
    pub total_fee_bps: u16,
    pub maker_fee_bps: u16,
    pub is_disabled: bool,
    pub is_generator_disabled: bool,
}

pub const OLD_PAIR_CONFIGS: Map<String, OldPairConfig> = Map::new("pair_configs");

pub fn migrate_pair_configs(storage: &mut dyn Storage) -> Result<(), StdError> {
    let keys = OLD_PAIR_CONFIGS
        .keys(storage, None, None, cosmwasm_std::Order::Ascending {})
        .collect::<Result<Vec<String>, StdError>>()?;

    for key in keys {
        let old_pair_configs = OLD_PAIR_CONFIGS.load(storage, key.clone())?;
        let pair_type = match old_pair_configs.pair_type.clone() {
            OldPairType::Xyk {} => AstroPairType::Xyk {},
            OldPairType::Stable {} => AstroPairType::Stable {},
            OldPairType::Concentrated {} => AstroPairType::Custom("concentrated".to_string()),
            OldPairType::Custom(pair_type) => AstroPairType::Custom(pair_type),
        };

        let pair_config = AstroFactoryPairConfig {
            code_id: old_pair_configs.code_id,
            pair_type: pair_type.clone(),
            total_fee_bps: old_pair_configs.total_fee_bps,
            maker_fee_bps: old_pair_configs.maker_fee_bps,
            is_disabled: old_pair_configs.is_disabled,
            is_generator_disabled: old_pair_configs.is_generator_disabled,
        };

        if key != pair_type.to_string() {
            PAIR_CONFIGS.remove(storage, key);
            PAIR_CONFIGS.save(storage, pair_type.to_string(), &pair_config)?;
        } else {
            PAIR_CONFIGS.save(storage, key, &pair_config)?;
        }
    }

    Ok(())
}