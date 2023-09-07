import { BigNumber } from "ethers";
import { Asset, BrokkrApiService, ProviderHelper } from "../helpers";
import { BrokkrSdkConfig, DCAInvestmentPeriod, TransactionInfo } from "../types";
import { convertNumberToBigNumber } from "../utils";
import { BROKKR_PORTFOLIO_POSITION_ABI, ERC20ABI } from "../constants/abi";

interface DCAInvestParams {
  userAddress: string;
  spendingAmount: number;
  spendingAsset: Asset;
  investmentPeriod: DCAInvestmentPeriod;
}

interface DCAWithdrawParams {
  convertBluechipIntoDepositAsset: boolean;
}

export class BrokkrDCAService {
  private readonly contractAddress: string;
  private readonly brokkrApiService: BrokkrApiService;
  private readonly providerHelper: ProviderHelper;

  public constructor(contractAddress: string, configs: BrokkrSdkConfig) {
    this.contractAddress = contractAddress;

    this.brokkrApiService = new BrokkrApiService(configs.apiKey, configs.chain);
    this.providerHelper = new ProviderHelper({ chain: configs.chain });
  }

  public async fetchUserHoldings(userAddress: string) {
    return this.brokkrApiService.fetchPortfolioUserHolding(userAddress, this.contractAddress);
  }

  public async fetchPortfolioInfo() {
    return this.brokkrApiService.fetchPortfolioDetail(this.contractAddress);
  }

  public async invest({ userAddress, spendingAmount, spendingAsset, investmentPeriod }: DCAInvestParams): Promise<TransactionInfo[]> {
    if (!spendingAsset.address) {
      throw Error("Native asset is not supported yet.");
    }

    const txList: TransactionInfo[] = [];

    const spendingAssetDecimals = await this.providerHelper.fetchDecimals(spendingAsset);

    const spendingAmountBigNumber = convertNumberToBigNumber(spendingAmount, spendingAssetDecimals);

    const allowanceResult = await this.providerHelper.queryContract<BigNumber>({
      abi: ERC20ABI,
      contractAddress: spendingAsset.address,
      funcName: "allowance",
      funcParams: [userAddress, this.contractAddress],
    });

    if (allowanceResult.lt(spendingAmountBigNumber)) {

      txList.push({
        contractAddress: spendingAsset.address,
        functionName: "approve",
        functionParams: [this.contractAddress, spendingAmountBigNumber.toString()],
        abi: ERC20ABI,
      });
    }

    txList.push({
      abi: BROKKR_PORTFOLIO_POSITION_ABI,
      contractAddress: this.contractAddress,
      functionName: 'deposit',
      functionParams: [spendingAmountBigNumber.toString(), investmentPeriod],
    });

    return txList;
  }

  public async withdraw({ convertBluechipIntoDepositAsset }: DCAWithdrawParams): Promise<TransactionInfo[]> {
    const txList: TransactionInfo[] = [];

    txList.push({
      abi: BROKKR_PORTFOLIO_POSITION_ABI,
      contractAddress: this.contractAddress,
      functionName: 'withdrawAll(bool)',
      functionParams: [convertBluechipIntoDepositAsset],
    });

    return txList;
  }
}