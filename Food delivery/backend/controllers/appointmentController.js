const Appointment = require('../models/Appointment');

// Create Appointment
exports.createAppointment = async (req, res) => {
    try {
        const appointment = new Appointment(req.body);
        await appointment.save();
        res.status(201).json(appointment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get All Appointments
exports.getAllAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find()
            .populate('patientId')
            .populate('doctorId');
        res.json(appointments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
