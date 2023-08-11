import axios from "axios";
import { Asset } from "../crypto-asset";
import {
  BrokkrSdkConfig,
  Chain,
  OverallUserInvestmentMetricsResponse,
  PriceTimeRangeData,
  TimeRange,
  UserPortfolioHolding,
} from "../types";
import { ProviderHelper } from "../provider-helper/ProviderHelper";
import { getVersionedServiceURL } from "../utils";
import { PORTFOLIO_PATH, USER_PORTFOLIO_PATH } from "../constants";

export class UserManager {
  private readonly chain: Chain;
  private readonly providerHelper: ProviderHelper;
  private readonly apiKey: string;

  public constructor(apiKey: string, chain: Chain, configs: BrokkrSdkConfig) {
    this.apiKey = apiKey;
    this.chain = chain;
    this.providerHelper = new ProviderHelper({
      chain,
      rpcUrl: configs.publicNodeUrl,
    });
  }

  public async fetchPortfolioHolding(
    userAddress: string,
    portfolioAddress: string,
  ) {
    console.log(this.apiKey);
    const response = await axios.get<UserPortfolioHolding>(
      getVersionedServiceURL(
        `/${PORTFOLIO_PATH}/${portfolioAddress}/users/${userAddress}`,
        this.chain,
      ),
      {
        headers: {
          "X-API-KEY": this.apiKey,
        }
      }
    );

    return response.data;
  }

  public async fetchBalance(userAddress: string, cryptoAsset: Asset) {
    if(this.chain !== cryptoAsset.chain) throw Error(`The sdk network(${this.chain}) does not match with asset network(${cryptoAsset.chain}) please switch to see the result.`)
    return this.providerHelper.fetchBalance(cryptoAsset, userAddress);
  }

  public async fetchOverallOverview(userAddress: string) {
    const response = await axios.get<OverallUserInvestmentMetricsResponse>(
      getVersionedServiceURL(
        `/${USER_PORTFOLIO_PATH}/${userAddress}`,
        this.chain,
      ),
      {
        headers: {
          // apiKey: this.apiKey,
        }
      }
    );

    return response.data;
  }

  public async fetchOverallOverviewHistoricalData(
    userAddress: string,
    timeRange: TimeRange = "all",
  ) {
    const response = await axios.get<PriceTimeRangeData>(
      getVersionedServiceURL(
        `/${USER_PORTFOLIO_PATH}/${userAddress}/holdingsValues?range=${timeRange}`,
        this.chain,
      ),
      {
        headers: {
          // apiKey: this.apiKey,
        }
      }
    );

    return response.data;
  }
}
