import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography } from '@mui/material';

function AppointmentForm() {
    const [patients, setPatients] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [formData, setFormData] = useState({ patientId: '', doctorId: '', date: '' });

    useEffect(() => {
        axios.get('http://localhost:5000/api/patients')
            .then((res) => setPatients(res.data))
            .catch((err) => console.log(err));

        axios.get('http://localhost:5000/api/doctors')
            .then((res) => setDoctors(res.data))
            .catch((err) => console.log(err));
    }, []);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/appointments', formData);
            alert("Appointment booked successfully");
            setFormData({ patientId: '', doctorId: '', date: '' });
        } catch (error) {
            console.error("Error booking appointment:", error);
        }
    };

    return (
        <Container>
            <Typography variant="h6" gutterBottom>Book order</Typography>
            <form onSubmit={handleSubmit}>
                <TextField select label="customer" name="orderID" value={formData.patientId} onChange={handleChange} fullWidth margin="normal">
                    {patients.map((patient) => (
                        <option key={patient._id} value={patient._id}>{patient.name}</option>
                    ))}
                </TextField>
                <TextField select label="restaurent" name="restaurentID" value={formData.doctorId} onChange={handleChange} fullWidth margin="normal">
                    {doctors.map((doctor) => (
                        <option key={doctor._id} value={doctor._id}>{doctor.name} - {doctor.specialty}</option>
                    ))}
                </TextField>
                <TextField label="Date" name="date" type="datetime-local" value={formData.date} onChange={handleChange} fullWidth margin="normal" />
                <Button type="submit" variant="contained" color="primary" fullWidth>Book order</Button>
            </form>
        </Container>
    );
}

export default AppointmentForm;
