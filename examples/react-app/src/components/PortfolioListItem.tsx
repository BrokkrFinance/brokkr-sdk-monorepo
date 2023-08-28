
import { Grid, ListItemIcon, ListItemText, ListItem, Paper, Box } from '@mui/material';
import { Chain, PortfolioInformation, PortfolioType } from 'brokkr-sdk';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface PortfolioListItemProps {
    portfolio: PortfolioInformation;
    chain: Chain;
}

const PortfolioListItem: FC<PortfolioListItemProps> = ({ chain, portfolio: { userFriendlyName, slogan, tvl, portfolioIconUrl, address, portfolioType } }) => {
    const portfolioLink = portfolioType === PortfolioType.Index ? `/index/${chain}/${address}` : `/token-issuing/${chain}/${address}`;

    return (
        <Link style={{ textDecoration: 'none' }} to={portfolioLink}>
            <Grid container spacing={2} mb={1}>
                <Grid item xs={12}>
                    <Paper elevation={3} >
                        <Box p={2} sx={{ display: "flex" }}>
                            <ListItem>
                                <ListItemIcon>
                                    <img src={portfolioIconUrl} alt="portfolio icon" style={{ width: '40px' }} />
                                </ListItemIcon>
                                <Box>
                                    <ListItemText primary={userFriendlyName} />
                                    <ListItemText primary={slogan} />
                                </Box>
                                <ListItemText sx={{ textAlign: "end" }} >TVL: {tvl}</ListItemText>

                            </ListItem>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Link>
    )
}

export default PortfolioListItem;