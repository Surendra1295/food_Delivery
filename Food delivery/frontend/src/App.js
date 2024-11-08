import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PatientForm from './components/PatientForm'; // Make sure path is correct
import DoctorForm from './components/DoctorForm'; // Make sure path is correct
import AppointmentForm from './components/AppointmentForm'; // Make sure path is correct
import HomePage from './components/HomePage'; // Create this component for the home page
import Navbar from './components/Navbar'; // Optional: Create a navbar for easy navigation

function App() {
    return (
        <Router>
            <Navbar /> {/* Optional: Navbar for navigation */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/patients" element={<PatientForm />} />
                <Route path="/doctors" element={<DoctorForm />} />
                <Route path="/appointments" element={<AppointmentForm />} />
            </Routes>
        </Router>
    );
}

export default App;
