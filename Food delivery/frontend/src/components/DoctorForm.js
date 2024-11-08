import React, { useState } from 'react';
import { TextField, Button, Container, Grid, Typography, Paper } from '@mui/material';
import axios from 'axios';

function DoctorForm() {
    const [formData, setFormData] = useState({
        name: '',
        specialty: '',
        contact: '',
        experience: ''  // Add experience field here
    });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Sending the updated form data with experience field
            await axios.post('http://localhost:5000/api/doctors', formData);  
            alert("Doctor added successfully!");
            setFormData({ name: '', specialty: '', contact: '', experience: '' });
        } catch (error) {
            console.error("Error adding doctor:", error);
        }
    };

    return (
        <Container maxWidth="sm">
            <Paper sx={{ padding: 3 }}>
                <Typography variant="h4" align="center" gutterBottom>Add New restaurent</Typography>
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
                        <Grid item xs={12}>
                            <TextField 
                                label="location" 
                                name="specialty" 
                                value={formData.specialty} 
                                onChange={handleChange} 
                                fullWidth 
                                required 
                            />
                        </Grid>
                        <Grid item xs={12}>
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
                                label="rating" 
                                name="experience" 
                                value={formData.experience} 
                                onChange={handleChange} 
                                fullWidth 
                                required 
                                type="number"  // Make sure it's a number input
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button 
                                type="submit" 
                                variant="contained" 
                                color="primary" 
                                fullWidth
                            >
                                Add restaurent
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
}

export default DoctorForm;
