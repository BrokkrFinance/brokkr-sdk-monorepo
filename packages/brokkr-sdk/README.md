# BROKKR SDK

This SDK provides some functionality to make it easier to use brokkr strategies and portfolios in your application.

To use this package first you need to initialize it.
```const brokkrSdk = new BrokkrClientSdk(apiToken: string, chain: Chain, options: {publicRpcUrl: string, backendUrl: string})```

The SDK contains two important domain. 
- portfolio
- user


To get all the portfolio list:
```brokkrSdk.fetchPortfolioList(typeQuery?: PortfolioType)```

To get a single portfolio information:
```brokkrSdk.fetchPortfolioDetail(portfolioAddress: string)```

To get historical information of a portfolio:
```brokkrSdk.fetchPortfolioPriceHistoricalData(portfolioAddress: string, timeRange: TimeRange = "all")```

To estimate the return of deposit or withdraw from a portfolio:
```brokkrSdk.estimateTxReturn(txInfo: TxInfo, userAddress: string)```


To get information about user's holding value in a portfolio:
```brokkrSdk.user.fetchPortfolioHolding( userAddress: string, portfolioAddress: string)```

To get balance of a token:
```brokkrSdk.user.fetchBalance(userAddress: string, cryptoAsset: Asset)```

To get user overall view of investment in Brokkr portfolios:
```brokkrSdk.fetchOverallOverview(userAddress: string)```

To get user overall view historical data:
```brokkrSdk.user.fetchOverallOverviewHistoricalData( userAddress: string, timeRange: TimeRange = "all")```
