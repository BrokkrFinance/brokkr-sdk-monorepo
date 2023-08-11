import axios from "axios";
import {
  BrokkrSdkConfig,
  Chain,
  PortfolioInformation,
  PortfolioType,
  PriceTimeRangeData,
  TimeRange,
  TxInfo,
} from "../types";
import {
  calculateEstimatedTxResult,
  convertNumberToBigNumber,
  convertBigNumberToNumber,
  getVersionedServiceURL,
} from "../utils";
import { PORTFOLIO_PATH } from "../constants";
import { ProviderHelper } from "../provider-helper/ProviderHelper";
import { BigNumber, ethers } from "ethers";
import {
  BROKKR_PORTFOLIO_INDEX_ABI,
  BROKKR_PORTFOLIO_TOKEN_ISSUEING_ABI,
  ERC20ABI,
} from "../abi";

export class PortfolioManager {
  private readonly chain: Chain;
  private readonly apiKey: string;
  private readonly providerHelper: ProviderHelper;

  public constructor(apiKey: string, chain: Chain, config: BrokkrSdkConfig) {
    this.apiKey = apiKey;
    this.chain = chain;
    this.providerHelper = new ProviderHelper({
      chain,
      rpcUrl: config.publicNodeUrl,
    });
  }

  public async fetchPortfolioList(typeQuery?: PortfolioType) {
    console.log(this.apiKey);
    const response = await axios.get<PortfolioInformation[]>(
      getVersionedServiceURL(`/${PORTFOLIO_PATH}`, this.chain),
      {
        params: {
          type: typeQuery,
        },
        headers: {
          // apiKey: this.apiKey,
        },
      },
    );

    return response.data;
  }

  public async fetchPortfolioDetail(portfolioAddress: string) {
    const response = await axios.get<PortfolioInformation>(
      getVersionedServiceURL(
        `/${PORTFOLIO_PATH}/${portfolioAddress}`,
        this.chain,
      ),
      {
        headers: {
          // apiKey: this.apiKey,
        },
      },
    );

    return response.data;
  }

  public async fetchPortfolioPriceHistoricalData(
    portfolioAddress: string,
    timeRange: TimeRange = "all",
  ) {
    const response = await axios.get<PriceTimeRangeData>(
      getVersionedServiceURL(
        `/${PORTFOLIO_PATH}/${portfolioAddress}/prices`,
        this.chain,
      ),
      {
        params: {
          range: timeRange,
        },
        headers: {
          // apiKey: this.apiKey,
        },
      },
    );

    return response.data;
  }

  public async estimateTxReturn(txInfo: TxInfo, userAddress: string) {
    if (txInfo.portfolioType === PortfolioType.TokenIssuing)
      return this.estimateTokenIssuingReturn(txInfo, userAddress);

    if (txInfo.portfolioType === PortfolioType.Index)
      return this.estimateIndexReturn(txInfo);

    // @todo: dca needs to be decided.
    return 0;
  }

  private async estimateIndexReturn({
    inputAmount,
    portfolioAddress,
    inputToken,
    outputToken,
    investMode,
  }: TxInfo) {
    const inputTokenDecimals = await this.providerHelper.fetchDecimals(
      inputToken,
    );
    const outputTokenDecimals = await this.providerHelper.fetchDecimals(
      outputToken,
    );

    if (investMode === "withdraw") {
      const { amountToken }: { amountToken: BigNumber } =
        await this.providerHelper.queryContract({
          abi: BROKKR_PORTFOLIO_INDEX_ABI,
          contractAddress: portfolioAddress,
          funcName: "getAmountTokenFromExactIndex",
          funcParams: [
            outputToken.address,
            convertNumberToBigNumber(inputAmount, inputTokenDecimals),
          ],
        });

      return convertBigNumberToNumber(amountToken, outputTokenDecimals);
    }

    const { amountIndex }: { amountIndex: BigNumber } =
      await this.providerHelper.queryContract({
        abi: BROKKR_PORTFOLIO_INDEX_ABI,
        contractAddress: portfolioAddress,
        funcName: "getAmountIndexFromToken",
        funcParams: [
          inputToken.address,
          convertNumberToBigNumber(inputAmount, inputTokenDecimals),
        ],
      });

    return convertBigNumberToNumber(amountIndex, outputTokenDecimals);
  }

  private async estimateTokenIssuingReturn(
    {
      inputAmount,
      portfolioAddress,
      inputToken,
      investMode,
      outputToken,
    }: TxInfo,
    userAddress: string,
  ) {
    const provider = this.providerHelper.getProvider();

    const { chainId } = await provider.getNetwork();
    const decimals = await this.providerHelper.fetchDecimals(inputToken);
    // @todo: use convert number to big number function
    const parsedAmount = inputAmount * 10 ** decimals;

    const tokenContract = new ethers.Contract(
      inputToken.address!,
      ERC20ABI,
      provider,
    );

    const portfolioContract = new ethers.Contract(
      portfolioAddress,
      BROKKR_PORTFOLIO_TOKEN_ISSUEING_ABI,
      provider,
    );

    const increaseAllowanceTxData = tokenContract.interface.encodeFunctionData(
      "approve",
      [portfolioAddress, parsedAmount],
    );
    const tokenOperationTxData = portfolioContract.interface.encodeFunctionData(
      "withdraw",
      [parsedAmount, 0, userAddress, []],
    );

    const resp = await axios.post(
      getVersionedServiceURL(`/portfolio/tenderly/simulate-bundle`, this.chain),
      {
        simulations: [
          {
            save: true,
            save_if_fails: true,
            simulation_type: "quick",
            network_id: chainId.toString(),
            from: userAddress,
            to: inputToken.address,
            input: increaseAllowanceTxData,
          },
          {
            save: true,
            save_if_fails: true,
            simulation_type: "quick",
            network_id: chainId.toString(),
            from: userAddress,
            to: inputToken.address,
            input: tokenOperationTxData,
          },
        ],
      },
    );

    const errors = resp.data.simulation_results
      .map((sim: any) => sim.simulation.error_message)
      .filter((err: any) => err);

    if (errors.length) {
      throw new Error(`Simulation failed with messages: ${errors}`);
    }

    const calculatedResult = calculateEstimatedTxResult(
      resp.data.simulation_results[1].transaction.transaction_info,
      userAddress,
      investMode,
    );

    const outputDecimals = await this.providerHelper.fetchDecimals(outputToken);

    return convertBigNumberToNumber(calculatedResult, outputDecimals);
  }

}
