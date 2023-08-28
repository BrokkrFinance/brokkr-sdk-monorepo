import axios, { AxiosInstance } from "axios";
import { BROKKR_API_BASE_URL, PORTFOLIO_PATH, USER_PATH } from "../../constants/configs";
import { Chain, OverallUserInvestmentMetrics, PortfolioInformation, PortfolioInformationResponse, PortfolioType, PriceTimeRangeData, TimeRange, UserPortfolioHolding } from "../../types";
import { calculateEstimatedTxResult, convertPortfolioResponse } from "./utils";
import { EstimatePortfolioReturnRequest } from "./types";
import { convertBigNumberToNumber } from "../../utils";

export class BrokkrApiService {
  brokkrApiService: AxiosInstance;
  chain: Chain;

  public constructor(apiKey: string, chian: Chain, baseUrl: string = BROKKR_API_BASE_URL) {
    this.chain = chian;

    this.brokkrApiService = axios.create({
      baseURL: `${baseUrl}/${chian}/portfolio-api/v2/`,
      headers: {
        'X-API-KEY': apiKey,
      },
    });
  }

  public async fetchPortfolioList(typeQuery?: PortfolioType): Promise<PortfolioInformation[]> {
    const response = await this.brokkrApiService.get<PortfolioInformationResponse[]>(
      PORTFOLIO_PATH,
      {
        params: {
          type: typeQuery,
        },
      },
    );

    return response.data.map(portfolio => convertPortfolioResponse(portfolio, this.chain));
  }

  public async fetchPortfolioDetail(portfolioAddress: string): Promise<PortfolioInformation> {
    const response = await this.brokkrApiService.get<PortfolioInformationResponse>(
      `${PORTFOLIO_PATH}/${portfolioAddress}`,
    );

    return convertPortfolioResponse(response.data, this.chain);
  }

  public async fetchPortfolioHisoricalData(portfolioAddress: string, timeRange: TimeRange = 'all') {
    const response = await axios.get<PriceTimeRangeData>(
      `${PORTFOLIO_PATH}/${portfolioAddress}/prices`,
      {
        params: {
          range: timeRange,
        },
      },
    );

    return response.data;
  }

  public async fetchPortfolioEstimatedReturn({ simulations, userAddress, investMode, outputTokenDecimals }: EstimatePortfolioReturnRequest): Promise<number> {
    const response = await this.brokkrApiService.post(
      '/tenderly/simulate-bundle',
      {
        simulations,
      },
    );

    const errors = response.data.simulation_results
      .map((sim: any) => sim.simulation.error_message)
      .filter((err: any) => err);

    if (errors.length) {
      throw new Error(`Simulation failed with messages: ${errors}`);
    }

    const calculatedResult = calculateEstimatedTxResult(
      response.data.simulation_results[1].transaction.transaction_info,
      userAddress,
      investMode,
    );

    return convertBigNumberToNumber(calculatedResult, outputTokenDecimals);
  }

  public async fetchPortfolioUserHolding(portfolioAddress: string, userAddress: string): Promise<UserPortfolioHolding> {
    const response = await this.brokkrApiService.get<UserPortfolioHolding>(
      `${PORTFOLIO_PATH}/${portfolioAddress}/users/${userAddress}`,
    );

    return response.data;
  }

  public async fetchUserOverallOverview(userAddress: string): Promise<OverallUserInvestmentMetrics> {
    const response = await axios.get<OverallUserInvestmentMetrics>(
      `${USER_PATH}/${userAddress}`,
    );

    return response.data;
  }

  public async fetchUserOverallOverviweHistoricalData(userAddress: string, timeRange: TimeRange = 'all'): Promise<PriceTimeRangeData> {
    const response = await this.brokkrApiService.get<PriceTimeRangeData>(
      `${USER_PATH}/${userAddress}/holdingsValues`,
      {
        params: {
          range: timeRange,
        },
      }
    );

    return response.data;
  }
}