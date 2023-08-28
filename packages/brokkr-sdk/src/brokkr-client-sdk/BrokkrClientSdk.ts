import { PortfolioManager } from "./PortfolioManager";
import { BrokkrSdkConfig, Chain } from "../types";
import { UserManager } from "./UserManager";

export class BrokkrClientSdk {
  public readonly currentChain: Chain;
  public readonly user: UserManager;
  public portfolio: PortfolioManager;

  constructor(
    configs: BrokkrSdkConfig,
  ) {
    this.currentChain = configs.chain;

    this.portfolio = new PortfolioManager(configs);
    this.user = new UserManager(configs);
  }
}

