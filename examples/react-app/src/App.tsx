import { useEffect } from "react";
import "./App.css";
import { Asset, BrokkrClientSdk, Chain, PortfolioType } from "brokkr-sdk";

const sdk = new BrokkrClientSdk("something");
const testWalletAddress = "0x4821fCb59f13376eDd7bC82f6eE37785F3A7AB66";
const ardixAddress = "0x6b9f66564d92fed3643cc9f86e2c21bd84171699";
const usdcAsset = new Asset(
  "usdc",
  Chain.ARBITRUM,
  "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
);
function App() {
  useEffect(() => {
    sdk.portfolio
      .fetchPortfolioList(PortfolioType.Index)
      .then((portfolioList) => {
        console.log(portfolioList);
      });
    sdk.portfolio.fetchPortfolioDetail(ardixAddress).then((portfilioInfo) => {
      console.log(portfilioInfo);
    });
    sdk.portfolio
      .fetchPortfolioPriceHistoricalData(ardixAddress, "1W")
      .then((historical) => console.log(historical));
    sdk.user
      .fetchPortfolioHolding(testWalletAddress, ardixAddress)
      .then((res) => console.log(res));
    sdk.user
      .fetchOverallOverview(testWalletAddress)
      .then((res) => console.log(res));
    sdk.user
      .fetchOverallOverviewHistoricalData(testWalletAddress, "1W")
      .then((res) => console.log(res));
    sdk.user
      .fetchBalance(testWalletAddress, usdcAsset)
      .then((res) => console.log(res));
  }, []);

  return (
    <div>
      <h1>Brokkr SDK Example</h1>
      <p></p>
    </div>
  );
}

export default App;
