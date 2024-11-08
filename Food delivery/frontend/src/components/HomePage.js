import React from 'react';
import { Card, CardContent, Typography, Button, Grid, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <Box sx={{ flexGrow: 1, padding: 3 }}>
            <Typography variant="h3" gutterBottom align="center">Food delivary system</Typography>
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} sm={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" align="center">Manage customers</Typography>
                            <Button 
                                component={Link} 
                                to="/patients" 
                                fullWidth 
                                variant="contained" 
                                color="primary"
                                sx={{ marginTop: 2 }}
                            >
                                Add / View Patients
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" align="center">Manage restaurents</Typography>
                            <Button 
                                component={Link} 
                                to="/doctors" 
                                fullWidth 
                                variant="contained" 
                                color="primary"
                                sx={{ marginTop: 2 }}
                            >
                                Add / View restaurents
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" align="center">Manage order</Typography>
                            <Button 
                                component={Link} 
                                to="/appointments" 
                                fullWidth 
                                variant="contained" 
                                color="primary"
                                sx={{ marginTop: 2 }}
                            >
                                Book / View orders
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}

export default HomePage;
