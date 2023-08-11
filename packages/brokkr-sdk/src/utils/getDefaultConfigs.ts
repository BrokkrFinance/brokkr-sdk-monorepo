import { DEFAULT_ARBITRUM_RPC_URL, DEFAULT_AVALANCHE_RPC_URL } from "../constants"
import { BrokkrSdkConfig, Chain } from "../types"

export function getDefaultConfigs(chain: Chain): BrokkrSdkConfig {
  if(chain === Chain.ARBITRUM) {
    return {
      publicNodeUrl: DEFAULT_ARBITRUM_RPC_URL,
    }
  }

  return {
    publicNodeUrl: DEFAULT_AVALANCHE_RPC_URL,
  }
}
