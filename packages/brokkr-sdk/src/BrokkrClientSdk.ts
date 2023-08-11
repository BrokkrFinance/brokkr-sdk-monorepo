import { PortfolioManager } from "./portfolio-manager/PortfolioManager";
import { BrokkrSdkConfig, Chain } from "./types";
import { UserManager } from "./user-manager/UserManager";
import { getDefaultConfigs } from "./utils";

export class BrokkrClientSdk {
  public readonly currentChain: Chain;
  public readonly user: UserManager;
  public portfolio: PortfolioManager;

  constructor(
    apiKey: string,
    chain: Chain = Chain.ARBITRUM,
    configs?: BrokkrSdkConfig,
  ) {
    this.currentChain = chain;

    const sdkConfigs = configs ?? getDefaultConfigs(chain);

    this.portfolio = new PortfolioManager(apiKey, chain, sdkConfigs);
    this.user = new UserManager(apiKey, chain, sdkConfigs);
  }
}

