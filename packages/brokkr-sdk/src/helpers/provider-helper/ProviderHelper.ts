import { BigNumberish, Contract, ethers } from "ethers";
import { Asset } from "../crypto-asset/Asset";
import { ERC20ABI } from "../../constants/abi/erc20";
import { Chain, QueryParams } from "../../types";
import { DEFAULT_DECIMALS } from "../../constants/configs";
import { convertBigNumberToNumber, getDefaultRpcUrl } from "../../utils";
import { ChainToChainId } from "../../constants/configs";

export interface ProviderHelperConfig {
  chain: Chain;
  rpcUrl?: string;
}

export class ProviderHelper {
  private provider: ethers.providers.JsonRpcProvider;
  readonly chain: Chain;

  constructor({ chain, rpcUrl }: ProviderHelperConfig) {
    const jsonRpcProviderUrl = rpcUrl ?? getDefaultRpcUrl(chain);
    this.provider = new ethers.providers.JsonRpcProvider(jsonRpcProviderUrl);
    this.chain = chain;
  }

  public getChainId() {
    return ChainToChainId[this.chain];
  }

  public getProvider() {
    return this.provider;
  }

  public async fetchGasPrice() {
    const gasPrice = await this.provider.getGasPrice();
    return gasPrice.toNumber();
  }

  public async fetchBalance(cryptoAsset: Asset, userAddress: string) {
    if (cryptoAsset.isNative) {
      return this.fetchNativeAssetBalance(userAddress);
    }

    return this.fetchERC20AssetBalance(cryptoAsset, userAddress);
  }

  public async fetchDecimals(cryptoAsset: Asset): Promise<number> {
    if (cryptoAsset.isNative) {
      return DEFAULT_DECIMALS;
    }

    const contract = new Contract(
      cryptoAsset.address!,
      ERC20ABI,
      this.provider,
    );
    const decimal: BigNumberish = await contract.decimals();

    return convertBigNumberToNumber(decimal);
  }

  public queryContract<T>({
    contractAddress,
    funcName,
    funcParams,
    abi,
  }: QueryParams): Promise<T> {
    if (!contractAddress) throw Error("Contract address must be provided.");

    const contract = new Contract(contractAddress, abi, this.provider);
    return contract[funcName](...funcParams);
  }

  public async gasLimit({
    contractAddress,
    funcName,
    funcParams,
    abi,
  }: QueryParams): Promise<number> {
    if (!contractAddress) throw Error("Contract address must be provided.");

    const contract = new Contract(contractAddress, abi, this.provider);
    const gasLimit: BigNumberish = await contract.estimateGas[funcName](
      ...funcParams,
    );

    return convertBigNumberToNumber(gasLimit);
  }

  private async fetchNativeAssetBalance(userAddress: string): Promise<number> {
    const balance: BigNumberish = await this.provider.getBalance(userAddress);
    return convertBigNumberToNumber(balance, DEFAULT_DECIMALS);
  }

  private async fetchERC20AssetBalance(
    cryptoAsset: Asset,
    userAddress: string,
  ): Promise<number> {
    const contract = new Contract(
      cryptoAsset.address!,
      ERC20ABI,
      this.provider,
    );
    const balance: BigNumberish = await contract.balanceOf(userAddress);
    const decimals = await this.fetchDecimals(cryptoAsset);

    return convertBigNumberToNumber(balance, decimals);
  }
}
