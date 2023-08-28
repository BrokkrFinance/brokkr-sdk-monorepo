import { BigNumber, ethers } from "ethers";
import { Asset, BrokkrApiService, ProviderHelper } from "../helpers";
import { BrokkrSdkConfig, InvestMode, TransactionInfo } from "../types";
import { convertNumberToBigNumber } from "../utils";
import { BROKKR_PORTFOLIO_TOKEN_ISSUEING_ABI, ERC20ABI } from "../constants/abi";

interface TokenIssuingEstimateParams {
    spendingAsset: Asset;
    receivingAsset: Asset;
    userAddress: string;
    investMode: InvestMode;
    spendingAmount: number;
}

interface TokenIssuingGenarateTxParams {
    userAddress: string;
    spendingAmount: number;
    spendingAsset: Asset;
    receivingAsset: Asset;
}

export class BrokkrTokenIssuingService {
    private readonly contractAddress: string;
    private readonly brokkrApiService: BrokkrApiService;
    private readonly providerHelper: ProviderHelper;

    public constructor(contractAddress: string, { apiKey, chain }: BrokkrSdkConfig) {
        this.contractAddress = contractAddress;

        this.brokkrApiService = new BrokkrApiService(apiKey, chain);
        this.providerHelper = new ProviderHelper({ chain });
    }

    public async fetchUserHoldings(userAddress: string) {
        return this.brokkrApiService.fetchPortfolioUserHolding(this.contractAddress, userAddress);
    }

    public async fetchPortfolioInfo() {
        return this.brokkrApiService.fetchPortfolioDetail(this.contractAddress);
    }

    public async estimateReturn({ spendingAmount, spendingAsset, receivingAsset, userAddress, investMode }: TokenIssuingEstimateParams): Promise<number> {
        const provider = this.providerHelper.getProvider();
        const { chainId } = await provider.getNetwork();

        const inputDecimals = await this.providerHelper.fetchDecimals(spendingAsset);
        const outputDecimals = await this.providerHelper.fetchDecimals(receivingAsset);

        const parsedAmount = convertNumberToBigNumber(spendingAmount, inputDecimals);

        const tokenContract = new ethers.Contract(
            spendingAsset.address!,
            ERC20ABI,
            provider,
        );
        const portfolioContract = new ethers.Contract(
            this.contractAddress,
            BROKKR_PORTFOLIO_TOKEN_ISSUEING_ABI,
            provider,
        );

        const increaseAllowanceTxData = tokenContract.interface.encodeFunctionData(
            "approve",
            [this.contractAddress, parsedAmount],
        );
        const tokenOperationTxData = portfolioContract.interface.encodeFunctionData(
            investMode,
            [parsedAmount, 0, userAddress, []],
        );

        const simulations = [
            {
                save: true,
                save_if_fails: true,
                simulation_type: "quick",
                network_id: chainId.toString(),
                from: userAddress,
                to: spendingAsset.address!,
                input: increaseAllowanceTxData,
            },
            {
                save: true,
                save_if_fails: true,
                simulation_type: "quick",
                network_id: chainId.toString(),
                from: userAddress,
                to: this.contractAddress,
                input: tokenOperationTxData,
            },
        ];

        return this.brokkrApiService.fetchPortfolioEstimatedReturn({
            simulations,
            userAddress,
            investMode,
            outputTokenDecimals: outputDecimals,
        });
    }

    public async invest({ userAddress, spendingAmount, spendingAsset, receivingAsset }: TokenIssuingGenarateTxParams): Promise<TransactionInfo[]> {
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

        const estimateResult = await this.estimateReturn({
            spendingAmount,
            spendingAsset,
            receivingAsset,
            userAddress,
            investMode: "deposit",
        });
        const receivingAssetDecimals = await this.providerHelper.fetchDecimals(receivingAsset);
        const receivingAmountBigNumber = convertNumberToBigNumber(estimateResult, receivingAssetDecimals);



        txList.push({
            contractAddress: this.contractAddress,
            functionName: "deposit",
            functionParams: [spendingAmountBigNumber.toString(), receivingAmountBigNumber.toString(), userAddress, []],
            abi: BROKKR_PORTFOLIO_TOKEN_ISSUEING_ABI,
        });

        return txList;
    }

    public async withdraw({ spendingAmount, spendingAsset, receivingAsset, userAddress }: TokenIssuingGenarateTxParams): Promise<any> {
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

        const estimateResult = await this.estimateReturn({
            spendingAmount,
            spendingAsset,
            receivingAsset,
            userAddress,
            investMode: "withdraw",
        });
        const receivingAssetDecimals = await this.providerHelper.fetchDecimals(receivingAsset);
        const receivingAmountBigNumber = convertNumberToBigNumber(estimateResult, receivingAssetDecimals);

        txList.push({
            contractAddress: this.contractAddress,
            functionName: "withdraw",
            functionParams: [spendingAmountBigNumber.toString(), receivingAmountBigNumber.toString(), userAddress, []],
            abi: BROKKR_PORTFOLIO_TOKEN_ISSUEING_ABI,
        });

        return txList;
    }
}
