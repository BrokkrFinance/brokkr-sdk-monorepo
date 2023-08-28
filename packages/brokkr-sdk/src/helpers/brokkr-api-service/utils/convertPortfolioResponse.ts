import { BROKKR_CDN_URL } from "../../../constants/configs";
import { Chain, PortfolioInformation, PortfolioInformationResponse } from "../../../types";
import { Asset } from "../../crypto-asset/Asset";

export function convertPortfolioResponse(portfolioResponse: PortfolioInformationResponse, chain: Chain): PortfolioInformation {
  return {
    ...portfolioResponse,
    portfolioIconUrl: `${BROKKR_CDN_URL}/${chain}/${portfolioResponse.address.toLowerCase()}/logo`,
    audits: portfolioResponse.audits && portfolioResponse.audits.map((audit) => ({
      ...audit,
      iconUrl: `${BROKKR_CDN_URL}/${audit.auditorName}`,
    })),
    withdrawalToken: portfolioResponse.withdrawalToken && portfolioResponse.withdrawalToken.map(({ ticker, chain, address }) => new Asset(ticker, chain, address)),
    requiredDepositToken: portfolioResponse.requiredDepositToken && portfolioResponse.requiredDepositToken.map(({ ticker, chain, address }) => new Asset(ticker, chain, address)),
    portfolioToken: portfolioResponse.portfolioToken &&  new Asset(portfolioResponse.portfolioToken.ticker, portfolioResponse.portfolioToken.chain, portfolioResponse.portfolioToken.address),
  }
}