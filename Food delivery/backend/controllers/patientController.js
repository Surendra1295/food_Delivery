const Patient = require('../models/Patient');

exports.createPatient = async (req, res) => {
    try {
        const patient = new Patient(req.body);
        await patient.save();
        res.status(201).json(patient);  // Return the newly created patient
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getAllPatients = async (req, res) => {
    try {
        const patients = await Patient.find();
        res.json(patients);  // Return all patients
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
