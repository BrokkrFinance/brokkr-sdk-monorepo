import * as React from 'react';
import { Container, Grid, Box, Tabs, Tab, Typography, Button, FormControl, InputLabel, Select, MenuItem, TextField } from '@mui/material';

interface CustomTabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: CustomTabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


export default function DCA() {
    const [value] = React.useState(0);

    function a11yProps(index: number) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    return (
        <>

            <Container>
                <Grid container spacing={2}>

                    <Grid item xs={12}>
                        <Box>
                            <Typography variant='h4' textAlign={'center'}>Lorem ipsom blah text!</Typography>
                            <Typography variant='body1' textAlign={'center'}>Lorem ipsom blah text!</Typography>
                        </Box>

                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{ width: '100%' }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs aria-label="basic tabs example">
                                    <Tab label="First" {...a11yProps(0)} />
                                    <Tab label="Item Two" {...a11yProps(1)} />
                                </Tabs>
                            </Box>
                            <CustomTabPanel value={value} index={0}>
                                <Box sx={{ position: "relative" }}>

                                    <Box mt={5}>
                                        <FormControl fullWidth>
                                            <InputLabel color='primary' id="demo-simple-select-label">Age</InputLabel>
                                            <Select
                                                color='primary'
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                label="Age"
                                            >
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                            <TextField color='primary' sx={{ marginTop: "15px" }} id="outlined-basic" label="Outlined" variant="outlined" />
                                            <TextField color='primary' sx={{ marginTop: "15px" }} id="outlined-basic" label="Simple" variant="outlined" />
                                            <Button variant="contained" sx={{ marginTop: "15px" }} size="large" color="success">
                                                Success
                                            </Button>
                                        </FormControl>
                                    </Box>
                                </Box>
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={1}>
                                <Box sx={{ position: "relative" }}>

                                    <Box mt={5}>
                                        <FormControl fullWidth>
                                            <InputLabel color='primary' id="demo-simple-select-label">Age</InputLabel>
                                            <Select
                                                color='primary'
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                label="Age"
                                            >
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                            <TextField color='primary' sx={{ marginTop: "15px" }} id="outlined-basic" label="Outlined" variant="outlined" />
                                            <TextField color='primary' sx={{ marginTop: "15px" }} id="outlined-basic" label="Simple" variant="outlined" />
                                            <Button variant="contained" sx={{ marginTop: "15px" }} size="large" color="success">
                                                Success
                                            </Button>
                                        </FormControl>
                                    </Box>
                                </Box>
                            </CustomTabPanel>

                        </Box>
                    </Grid>

                </Grid>

            </Container>

        </>
    )
}
