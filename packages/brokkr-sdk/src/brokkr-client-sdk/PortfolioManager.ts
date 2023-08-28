import {
  BrokkrSdkConfig,
  PortfolioType,
  TimeRange,
} from "../types";
import { BrokkrApiService } from "../helpers";

export class PortfolioManager {
  private readonly brokkrApiService: BrokkrApiService;

  public constructor({apiKey, chain }: BrokkrSdkConfig) {
    this.brokkrApiService = new BrokkrApiService(apiKey, chain);
  }

  public async fetchPortfolioList(typeQuery?: PortfolioType) {
    return this.brokkrApiService.fetchPortfolioList(typeQuery);
  }

  public async fetchPortfolioDetail(portfolioAddress: string) {
    return this.brokkrApiService.fetchPortfolioDetail(portfolioAddress);
  }

  public async fetchPortfolioPriceHistoricalData(
    portfolioAddress: string,
    timeRange: TimeRange = "all",
  ) {
    return this.brokkrApiService.fetchPortfolioHisoricalData(portfolioAddress, timeRange);
  }
}
