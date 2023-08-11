import { Chain } from "../types";

export class Asset {
  readonly ticker: string;
  readonly chain: Chain;
  readonly address?: string;

  constructor(ticker: string, chain: Chain, address?: string) {
    this.ticker = ticker;
    this.chain = chain;
    this.address = address;
  }

  toString(): string {
    return `${this.chain}-${this.ticker}-${this.address}`
  }

  public get isNative(): boolean {
    return !this.address;
  }

  public get iconUrl(): string {
    return `https://brokkr.finance/${this.ticker}`;
  }
}
