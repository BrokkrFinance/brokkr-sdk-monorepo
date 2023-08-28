import { Container, Grid, Box, Typography, Button, FormControl, TextField, Paper } from '@mui/material';
import { Asset, BrokkrClientSdk, BrokkrTokenIssuingService, PortfolioInformation } from 'brokkr-sdk';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BROKKR_SDK_CONFIG } from '../constants';

const userAddress = '0x4821fCb59f13376eDd7bC82f6eE37785F3A7AB66';

export default function TokenIssuingPortfolio() {
    const { chain, portfolioAddress } = useParams();
    const [portfolioService, setPortfolioService] = useState<BrokkrTokenIssuingService>();
    const [isDataLoading, setIsDataLoading] = useState(false);
    const [portfolioData, setPortfolioData] = useState<PortfolioInformation>();
    const [assetBalance, setAssetBalance] = useState(0);
    const [inputNumber, setInputNumber] = useState(0);

    useEffect(() => {
        if (chain && portfolioAddress) {
            setPortfolioService(new BrokkrTokenIssuingService(portfolioAddress, BROKKR_SDK_CONFIG));
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

    useEffect(() => {
        async function fetchaBalance() {
            const brokkrSDK = new BrokkrClientSdk(BROKKR_SDK_CONFIG);
            // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
            const balance = await brokkrSDK.user?.fetchBalance(userAddress, portfolioData?.requiredDepositToken[0]!);
            setAssetBalance(balance);
        }

        if (portfolioData) {
            fetchaBalance();
        }
    }, [portfolioData])

    async function handleInvest() {
        console.log({
            userAddress,
            spendingAmount: inputNumber,
            spendingAsset: portfolioData?.requiredDepositToken[0] as Asset,
            receivingAsset: portfolioData?.portfolioToken as Asset,

        })
        if (portfolioService) {
            const res = await portfolioService.invest({
                userAddress,
                spendingAmount: inputNumber,
                spendingAsset: portfolioData?.requiredDepositToken[0] as Asset,
                receivingAsset: portfolioData?.portfolioToken as Asset,
            });
            // const res = await portfolioService.withdraw({
            //     userAddress,
            //     spendingAmount: inputNumber,
            //     receivingAsset: portfolioData?.requiredDepositToken[0] as Asset,
            //     spendingAsset: portfolioData?.portfolioToken as Asset,
            // });
            console.log(res);
        }
    }


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
                                <Typography>balance: {assetBalance}</Typography>
                                <TextField
                                    type='number'
                                    color='secondary'
                                    sx={{ marginTop: "15px" }}
                                    label="input"
                                    variant="outlined"
                                    onChange={(e) => setInputNumber(Number(e.target.value))}
                                />
                                <Button onClick={handleInvest} variant="contained" sx={{ marginTop: "15px" }} size="large" color="success">
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
