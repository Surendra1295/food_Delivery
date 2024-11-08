const MedicalRecord = require('../models/MedicalRecord');

// Create Medical Record
exports.createMedicalRecord = async (req, res) => {
    try {
        const record = new MedicalRecord(req.body);
        await record.save();
        res.status(201).json(record);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get All Medical Records
exports.getAllMedicalRecords = async (req, res) => {
    try {
        const records = await MedicalRecord.find()
            .populate('patientId')
            .populate('doctorId');
        res.json(records);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
