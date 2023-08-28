import { ChainToRpcUrl } from "../constants/configs"
import { Chain } from "../types"

export function getDefaultRpcUrl(chain: Chain): string {
  return ChainToRpcUrl[chain];
}
