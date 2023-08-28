import { ContractInterface, ethers } from "ethers";
import { Asset } from "./helpers";

export enum Chain {
  AVALANCHE = 'avalanche',
  ARBITRUM = 'arbitrum',
}

export type TimeRange = '24H' | '1W' | '1M' | '6M' | '1Y' | 'all';

export enum PortfolioType {
  TokenIssuing = 'tokenbased',
  PeriodicalInvesting =  'dca',
  Index = 'tokenindex',
}

export type InvestMode = "deposit" | "withdraw";

export interface BrokkrSdkConfig {
  apiKey: string;
  chain: Chain;
  publicNodeUrl?: string;
};

export interface QueryParams {
  contractAddress: string;
  abi: ContractInterface;
  funcName: string;
  funcParams: unknown[];
}

export type PriceTimeRangeData = [number, number][];

export interface PortfolioInformationResponse {
  userFriendlyName: string;
  address: string;
  apy: number;
  priceChangeSinceStart: number;
  currentPrice: string;
  tvl: number;
  limit: {
    totalRemainingInvestmentAmount: string;
    investmentLimitPerAddress: string;
    minDepositAmount: string;
  };
  priceChange?: Record<TimeRange, string>;
  isPaused: boolean;
  audits: Array<{ auditorName: string, url: string }>;
  positions: Position[];
  description: string;
  slogan: string;
  riskRatingOutOf10: number;
  portfolioType: string;
  docsUrl: string;
  isWithdrawalDisabled: boolean;
  isDepositDisabled: boolean;
  requiredDepositToken: TokenPresentation[];
  withdrawalToken: TokenPresentation[];
  portfolioToken: TokenPresentation;
  startDateTimestamp: number;
}

export interface PortfolioInformation extends PortfolioInformationResponse {
  portfolioIconUrl: string;
  audits: Array<{ auditorName: string, url: string, iconUrl: string }>;
  withdrawalToken: Asset[];
  requiredDepositToken: Asset[];
  portfolioToken: Asset;
}

export interface Position {
  name: string;
  shareInPercentage: number;
  description: string;
}

export interface TokenPresentation {
  address?: string;
  ticker: string;
  chain: Chain;
}


export interface EstimatePortfolioContractResultInput {
  amount: number;
  asset: Asset;
  userAddress: string;
  contractAddress: string;
  investMode: InvestMode;
}

export interface OverallUserInvestmentMetrics {
  totalPortfoliosValue: {
    amount: string;
    ticker: string;
  };
  totalPortfoliosPerformance: Record<TimeRange, string>;
}

export interface TokenHolding {
  amount: number;
  ticker: string;
}

export interface PositionData {
  amountAlreadyInvested: TokenHolding;
  amountDeposited: TokenHolding;
  amountSplit: number;
  bluechipBought: TokenHolding;
  depositTimestamp: number;
  positionEndTimestamp: number;
  totalPositionValue: TokenHolding;
}

export interface UserPortfolioHolding {
  performance: number;
  totalValue: TokenHolding;
  holdings: TokenHolding[];
  positions?: PositionData[];
}

export interface TransactionInfo {
  contractAddress: string;
  functionName: string;
  functionParams: any[];
  abi: ethers.ContractInterface;
}

export type DCAInvestmentPeriod = '4' | '12' | '26' | '52';