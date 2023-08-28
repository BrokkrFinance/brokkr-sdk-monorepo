import { BrokkrClientSdk, PortfolioInformation, PortfolioType } from 'brokkr-sdk';
import PortfolioListItem from '../components/PortfolioListItem';
import { Box, Container, Grid } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { BROKKR_SDK_CONFIG } from '../constants';

const sdk = new BrokkrClientSdk(BROKKR_SDK_CONFIG);

const PortfolioList: FC = () => {
  const [portfolios, setPortfolios] = useState<PortfolioInformation[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchPortfolios() {
      setIsLoading(true);
      const portfolios = await sdk.portfolio.fetchPortfolioList();
      setPortfolios(portfolios);
      setIsLoading(false);
    }

    fetchPortfolios();
  }, [])


  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {
              isLoading ? ('Loading...') : (
                <Box px={3}>
                  {
                    portfolios
                      .filter(portfolio => portfolio.portfolioType !== PortfolioType.PeriodicalInvesting)
                      .filter(portfolio => portfolio.userFriendlyName).map((portfolio) => (
                        <PortfolioListItem key={portfolio.address} portfolio={portfolio} chain={sdk.currentChain} />
                      ))
                  }
                </Box>
              )
            }
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default PortfolioList;