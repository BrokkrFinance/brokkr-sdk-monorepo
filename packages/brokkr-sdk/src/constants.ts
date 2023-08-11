import { Chain } from "./types";

export const BASE_URL = '';
export const PORTFOLIO_PATH = 'portfolios';
export const USER_PORTFOLIO_PATH = 'users';
export const DEFAULT_ARBITRUM_RPC_URL = 'https://arb1.arbitrum.io/rpc';
export const DEFAULT_AVALANCHE_RPC_URL = 'https://api.avax.network/ext/bc/C/rpc';

export const ChainToChainId: Record<Chain, number> = {
  [Chain.ARBITRUM]: 42161,
  [Chain.AVALANCHE]: 43114,
};
