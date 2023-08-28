import { Asset, BrokkrApiService } from "../helpers";
import {
  BrokkrSdkConfig,
  Chain,
  TimeRange,
} from "../types";
import { ProviderHelper } from "../helpers/provider-helper/ProviderHelper";

export class UserManager {
  private readonly providerHelper: ProviderHelper;
  private readonly brokkrApiService: BrokkrApiService;
  private readonly chain: Chain;

  public constructor({ apiKey, chain, publicNodeUrl }: BrokkrSdkConfig) {
    this.chain = chain;
    this.providerHelper = new ProviderHelper({
      chain,
      rpcUrl: publicNodeUrl,
    });
    this.brokkrApiService = new BrokkrApiService(apiKey, chain);
  }

  public async fetchPortfolioHolding(
    userAddress: string,
    portfolioAddress: string,
  ) {
    return this.brokkrApiService.fetchPortfolioUserHolding(userAddress, portfolioAddress);
  }

  public async fetchBalance(userAddress: string, cryptoAsset: Asset) {
    if (this.chain !== cryptoAsset.chain) throw Error(`The sdk network(${this.chain}) does not match with asset network(${cryptoAsset.chain}) please switch to see the result.`)
    return this.providerHelper.fetchBalance(cryptoAsset, userAddress);
  }

  public async fetchOverallOverview(userAddress: string) {
    return this.brokkrApiService.fetchUserOverallOverview(userAddress);
  }

  public async fetchOverallOverviewHistoricalData(
    userAddress: string,
    timeRange: TimeRange = "all",
  ) {
    return this.brokkrApiService.fetchUserOverallOverviweHistoricalData(userAddress, timeRange);
  }
}
