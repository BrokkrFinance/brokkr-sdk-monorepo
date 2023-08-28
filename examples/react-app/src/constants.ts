import { BrokkrSdkConfig, Chain } from "brokkr-sdk";

export const BROKKR_API_KEY = '<YOUR_API_KEY>';
export const APP_CHAIN = Chain.AVALANCHE;
export const BROKKR_SDK_CONFIG: BrokkrSdkConfig = {
  apiKey: BROKKR_API_KEY,
  chain: APP_CHAIN,
};