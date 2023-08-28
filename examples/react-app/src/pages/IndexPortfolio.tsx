import { Container, Grid, Box, Typography, Button, FormControl, TextField, Paper } from '@mui/material';
import { BrokkrIndexService, PortfolioInformation } from 'brokkr-sdk';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BROKKR_SDK_CONFIG } from '../constants';

export default function IndexPortfolio() {
    const { chain, portfolioAddress } = useParams();
    const [portfolioService, setPortfolioService] = useState<BrokkrIndexService>();
    const [isDataLoading, setIsDataLoading] = useState(false);
    const [portfolioData, setPortfolioData] = useState<PortfolioInformation>();

    useEffect(() => {
        if (chain && portfolioAddress) {
            setPortfolioService(new BrokkrIndexService(portfolioAddress, BROKKR_SDK_CONFIG));
        }
    }, [chain, portfolioAddress])

    useEffect(() => {
        async function fetchPortfolio() {
            setIsDataLoading(true);
            const portfolio = await portfolioService?.fetchPortfolioInfo();
            setPortfolioData(portfolio);
            setIsDataLoading(false);
        }

        if (portfolioService) {
            fetchPortfolio();
        }
    }, [portfolioService])

    if (isDataLoading) {
        return (
            <div>Loading....</div>
        )
    }

    return (
        <>
            <Container>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12}>
                        <Typography variant='h4'>{portfolioData?.userFriendlyName}</Typography>
                        <Typography variant='body1'>{portfolioData?.slogan}</Typography>

                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='subtitle1' textAlign={"justify"}>
                            {portfolioData?.description}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Box mt={5}>
                            <FormControl fullWidth>
                                <TextField type='number' color='secondary' sx={{ marginTop: "15px" }} id="outlined-basic" label="input" variant="outlined" />
                                <Button variant="contained" sx={{ marginTop: "15px" }} size="large" color="success">
                                    Invest
                                </Button>
                            </FormControl>
                        </Box>
                    </Grid>

                    <Grid item xs={12}>
                        <Paper>
                            <Box p={5} textAlign={"center"} mt={3}>
                                <Typography variant='body2'>Chart Holder!!!</Typography>
                            </Box>
                        </Paper>
                    </Grid>

                </Grid>

            </Container>

        </>
    )
}
