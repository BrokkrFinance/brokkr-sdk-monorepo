# BROKKR SDK

This SDK provides some functionality to make it easier to use brokkr strategies and portfolios in your application.
With this SDK you can fetch the information about portfolios, user holdings, and detail on invest and withdraw in a portfolio.

To install the package:
```npm install brokkr-sdk```
or
```yarn add brokkr-sdk```

To start integrating you need an api key. Please contact the team(discord, twitter, telegram) to get an api key. w

There are three different types of portfoilios in brokkrs: Token based(aka Strategies), DCA, Indexes.

```
  export enum PortfolioType {
    TokenIssuing = 'tokenbased',
    PeriodicalInvesting =  'dca',
    Index = 'tokenindex',
  }
```

For each of these types there is a separate services to work with and the service porvide informations like invest, withdraw, user holding, and estimate:

```
BrokkrDCAService // DCA
BrokkrIndexService // Index
BrokkrTokenIssuingService // Token based
```

To use this package first you need to initialize it.
```const brokkrSdk = new BrokkrClientSdk({apiToken: <YOUR-API-KEY>, chain: Chain.AVALANCHE, publicNodeUrl?: <PUBLIC-NODE-URL>});```

The SDK contains two important domain. 
- portfolio
- user

To get all the portfolio list:
```brokkrSdk.fetchPortfolioList(typeQuery?: PortfolioType)```

To get a single portfolio information:
```brokkrSdk.fetchPortfolioDetail(portfolioAddress: string)```

To get historical information of a portfolio:
```brokkrSdk.fetchPortfolioPriceHistoricalData(portfolioAddress: string, timeRange: TimeRange = "all")```

To get information about user's holding value in a portfolio:
```brokkrSdk.user.fetchPortfolioHolding( userAddress: string, portfolioAddress: string)```

To get balance of a token:
```brokkrSdk.user.fetchBalance(userAddress: string, cryptoAsset: Asset)```

To get user overall view of investment in Brokkr portfolios:
```brokkrSdk.user.fetchOverallOverview(userAddress: string)```

To get user overall view historical data:
```brokkrSdk.user.fetchOverallOverviewHistoricalData( userAddress: string, timeRange: TimeRange = "all")```
