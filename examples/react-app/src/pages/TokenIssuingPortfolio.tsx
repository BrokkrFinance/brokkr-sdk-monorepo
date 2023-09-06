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

    const [isBalanceLoading, setIsBalanceLoading] = useState(false);
    const [investingAssetBalance, setInvestingAssetBalance] = useState(0);
    const [portfolioAssetBalance, setPortfolioAssetBalance] = useState(0);

    const [investInputNumber, setInvestInputNumber] = useState(0);
    const [withdrawInputNumber, setWithdrawInputNumber] = useState(0);

    const investingAsset = portfolioData?.requiredDepositToken[0];
    const portfolioAsset = portfolioData?.portfolioToken;

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
            
            if(!investingAsset || !portfolioAsset) return;

            const investBalance = await brokkrSDK.user?.fetchBalance(userAddress, investingAsset);
            const portfolioBalance = await brokkrSDK.user?.fetchBalance(userAddress, portfolioAsset);

            setInvestingAssetBalance(investBalance);
            setPortfolioAssetBalance(portfolioBalance);
        }

        if (portfolioData) {
            fetchaBalance();
        }
    }, [investingAsset, portfolioData, portfolioAsset])

    async function handleInvest() {
        if (portfolioService) {
            const res = await portfolioService.invest({
                userAddress,
                spendingAmount: investInputNumber,
                spendingAsset: portfolioData?.requiredDepositToken[0] as Asset,
                receivingAsset: portfolioData?.portfolioToken as Asset,
            });
            console.log(res);
        }
    }

    async function handleWithdraw() {
        if (portfolioService) {
            const res = await portfolioService.withdraw({
                userAddress,
                spendingAmount: withdrawInputNumber,
                receivingAsset: portfolioData?.requiredDepositToken[0] as Asset,
                spendingAsset: portfolioData?.portfolioToken as Asset,
            });
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
                    <Grid item xs={12}>
                        <Typography variant='subtitle1' textAlign={"justify"}>
                            {portfolioData?.description}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='h6'>Invest</Typography>
                        <Box mt={5}>
                            <FormControl fullWidth>
                                <Typography>balance: {investingAssetBalance} {investingAsset?.ticker}</Typography>
                                <TextField
                                    type='number'
                                    color='secondary'
                                    sx={{ marginTop: "15px" }}
                                    label="Amount"
                                    variant="outlined"
                                    defaultValue={0}
                                    onChange={(e) => setInvestInputNumber(Number(e.target.value))}
                                />
                                <Button onClick={handleInvest} variant="contained" sx={{ marginTop: "15px" }} size="large" color="success">
                                    Invest
                                </Button>
                            </FormControl>
                        </Box>
                    </Grid>

                    <Grid item xs={6}>
                        <Typography variant='h6'>Withdraw</Typography>
                        <Box mt={5}>
                            <FormControl fullWidth>
                                <Typography>balance: {portfolioAssetBalance} {portfolioAsset?.ticker}</Typography>
                                <TextField
                                    type='number'
                                    color='secondary'
                                    sx={{ marginTop: "15px" }}
                                    label="Amount"
                                    variant="outlined"
                                    onChange={(e) => setWithdrawInputNumber(Number(e.target.value))}
                                />
                                <Button onClick={handleWithdraw} variant="contained" sx={{ marginTop: "15px" }} size="large" color="success">
                                    Withdraw    
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
