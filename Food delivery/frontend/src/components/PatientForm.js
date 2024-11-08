import React, { useState } from 'react';
import { TextField, Button, Container, Grid, Typography, Box, Paper } from '@mui/material';
import axios from 'axios';

function PatientForm() {
    const [formData, setFormData] = useState({ name: '', age: '', contact: '', address: '' });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/patients', formData);  // Replace with your API URL
            alert("Patient added successfully!");
            setFormData({ name: '', age: '', contact: '', address: '' });
        } catch (error) {
            console.error("Error adding patient:", error);
        }
    };

    return (
        <Container maxWidth="sm">
            <Paper sx={{ padding: 3 }}>
                <Typography variant="h4" align="center" gutterBottom>Customer details</Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField 
                                label="Name" 
                                name="name" 
                                value={formData.name} 
                                onChange={handleChange} 
                                fullWidth 
                                required 
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField 
                                label="Age" 
                                name="age" 
                                value={formData.age} 
                                onChange={handleChange} 
                                fullWidth 
                                required 
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField 
                                label="Contact" 
                                name="contact" 
                                value={formData.contact} 
                                onChange={handleChange} 
                                fullWidth 
                                required 
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField 
                                label="Address" 
                                name="address" 
                                value={formData.address} 
                                onChange={handleChange} 
                                fullWidth 
                                required 
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button 
                                type="submit" 
                                variant="contained" 
                                color="primary" 
                                fullWidth
                            >
                                Add Customer
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
}

export default PatientForm;
