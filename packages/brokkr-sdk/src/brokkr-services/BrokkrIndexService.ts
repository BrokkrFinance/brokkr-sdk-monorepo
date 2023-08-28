import { BigNumber } from "ethers";
import { Asset, BrokkrApiService, ProviderHelper } from "../helpers";
import { BrokkrSdkConfig, InvestMode, TransactionInfo } from "../types";
import { BROKKR_PORTFOLIO_INDEX_ABI, ERC20ABI } from "../constants/abi";
import { convertBigNumberToNumber, convertNumberToBigNumber } from "../utils";

interface IndexEstimateParams {
    spendingAsset: Asset;
    receivingAsset: Asset;
    investMode: InvestMode;
    spendingAmount: number;
}

interface IndexGenarateTxParams {
    userAddress: string;
    spendingAmount: number;
    spendingAsset: Asset;
    receivingAsset: Asset;
}

export class BrokkrIndexService {
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

    public async estimateReturn({ spendingAmount, spendingAsset, receivingAsset, investMode }: IndexEstimateParams): Promise<number> {
        const spendingAssetDecimals = await this.providerHelper.fetchDecimals(
            spendingAsset,
        );
        const receivingAssetDecimals = await this.providerHelper.fetchDecimals(
            receivingAsset,
        );

        if (investMode === "withdraw") {
            const { amountToken }: { amountToken: BigNumber } =
                await this.providerHelper.queryContract({
                    abi: BROKKR_PORTFOLIO_INDEX_ABI,
                    contractAddress: this.contractAddress,
                    funcName: "getAmountTokenFromExactIndex",
                    funcParams: [
                        receivingAsset.address,
                        convertNumberToBigNumber(spendingAmount, spendingAssetDecimals),
                    ],
                });

            return convertBigNumberToNumber(amountToken, receivingAssetDecimals);
        }

        const { amountIndex }: { amountIndex: BigNumber } =
            await this.providerHelper.queryContract({
                abi: BROKKR_PORTFOLIO_INDEX_ABI,
                contractAddress: this.contractAddress,
                funcName: "getAmountIndexFromToken",
                funcParams: [
                    spendingAsset.address,
                    convertNumberToBigNumber(spendingAmount, spendingAssetDecimals),
                ],
            });

        return convertBigNumberToNumber(amountIndex, receivingAssetDecimals);
    }

    public async invest({ userAddress, spendingAmount, spendingAsset }: IndexGenarateTxParams): Promise<TransactionInfo[]> {
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

        const { amountIndex } = await this.providerHelper.queryContract<{ amountIndex: BigNumber }>({
            abi: BROKKR_PORTFOLIO_INDEX_ABI,
            contractAddress: this.contractAddress,
            funcName: 'getAmountIndexFromToken',
            funcParams: [spendingAsset.address, spendingAmountBigNumber],
        });

        const indexAmountWithSlippage = amountIndex.mul(995).div(1000);


        txList.push({
            contractAddress: this.contractAddress,
            functionName: 'mintIndexFromToken',
            functionParams: [
                spendingAsset.address,
                spendingAmountBigNumber.toString(),
                indexAmountWithSlippage.toString(),
                userAddress,
            ],
            abi: BROKKR_PORTFOLIO_INDEX_ABI,
        });

        return txList;
    }

    public async withdraw({ userAddress, spendingAmount, spendingAsset, receivingAsset }: IndexGenarateTxParams): Promise<TransactionInfo[]> {
        if (!spendingAsset.address) {
            throw Error("Native asset is not supported yet.");
        }

        const txList: TransactionInfo[] = [];

        const spendingAssetDecimals = await this.providerHelper.fetchDecimals(spendingAsset);

        const indexTokenAmountBigNumber = convertNumberToBigNumber(spendingAmount, spendingAssetDecimals);

        const allowanceResult = await this.providerHelper.queryContract<BigNumber>({
            abi: ERC20ABI,
            contractAddress: spendingAsset.address,
            funcName: "allowance",
            funcParams: [userAddress, this.contractAddress],
        });

        if (allowanceResult.lt(indexTokenAmountBigNumber)) {

            txList.push({
                contractAddress: spendingAsset.address,
                functionName: "approve",
                functionParams: [this.contractAddress, indexTokenAmountBigNumber.toString()],
                abi: ERC20ABI,
            });
        }

        const { amountToken } = await this.providerHelper.queryContract<{ amountToken: BigNumber }>({
            abi: BROKKR_PORTFOLIO_INDEX_ABI,
            contractAddress: this.contractAddress,
            funcName: 'getAmountTokenFromExactIndex',
            funcParams: [receivingAsset.address, indexTokenAmountBigNumber],
        });

        txList.push({
            abi: BROKKR_PORTFOLIO_INDEX_ABI,
            contractAddress: this.contractAddress,
            functionName: 'burnExactIndexForToken',
            functionParams: [
                receivingAsset.address,
                amountToken.toString(),
                indexTokenAmountBigNumber.toString(),
                userAddress,
            ],
        });

        return txList;
    }
}