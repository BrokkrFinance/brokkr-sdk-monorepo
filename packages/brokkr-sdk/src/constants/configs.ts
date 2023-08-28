import { Chain } from "../types";
export const DEFAULT_DECIMALS = 18;

export const BROKKR_API_BASE_URL = "https://api.brokkr.finance";
export const BROKKR_CDN_URL = "https://cdn.brokkr.finance";
export const PORTFOLIO_PATH = "portfolios";
export const USER_PATH = "users";

export const ChainToRpcUrl: Record<Chain, string> = {
  [Chain.ARBITRUM]: "https://arb1.arbitrum.io/rpc",
  [Chain.AVALANCHE]: "https://api.avax.network/ext/bc/C/rpc",
};

export const ChainToChainId: Record<Chain, number> = {
  [Chain.ARBITRUM]: 42161,
  [Chain.AVALANCHE]: 43114,
};
