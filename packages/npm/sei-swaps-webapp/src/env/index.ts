import { SeiChainId } from "@crownfi/sei-utils";

const CHAIN_ID = process.env.CHAIN_ID as SeiChainId;
const NORMALIZE_CURRENCY = process.env.NORMALIZE_CURRENCY;
const SLIPPAGE_TOLERANCE_PERCENTAGE = process.env.SLIPPAGE_TOLERANCE_PERCENTAGE;
const POOL_FACTORY_CONTRACT_ADDRESS = process.env.POOL_FACTORY_CONTRACT_ADDRESS;
const ROUTER_CONTRACT_ADDRESS = process.env.ROUTER_CONTRACT_ADDRESS;
const CW20_WRAPPER_CONTRACT_ADDRESS = process.env.CW20_WRAPPER_CONTRACT_ADDRESS;
const ERC20_WRAPPER_CONTRACT_ADDRESS = process.env.ERC20_WRAPPER_CONTRACT_ADDRESS;

if (!CHAIN_ID ||
    !NORMALIZE_CURRENCY ||
    !SLIPPAGE_TOLERANCE_PERCENTAGE ||
    !POOL_FACTORY_CONTRACT_ADDRESS ||
    !ROUTER_CONTRACT_ADDRESS ||
    !CW20_WRAPPER_CONTRACT_ADDRESS ||
    !ERC20_WRAPPER_CONTRACT_ADDRESS
  )
  throw new Error("Missing environment variables");

if (isNaN(+SLIPPAGE_TOLERANCE_PERCENTAGE))
  throw new Error("SLIPPAGE_TOLERANCE_PERCENTAGE must be a number");


export const env = {
  CHAIN_ID,
  NORMALIZE_CURRENCY,
  SLIPPAGE_TOLERANCE_PERCENTAGE: +SLIPPAGE_TOLERANCE_PERCENTAGE,
  POOL_FACTORY_CONTRACT_ADDRESS,
  ROUTER_CONTRACT_ADDRESS,
  CW20_WRAPPER_CONTRACT_ADDRESS,
  ERC20_WRAPPER_CONTRACT_ADDRESS,
};