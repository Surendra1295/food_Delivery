const mongoose = require('mongoose');

const medicalRecordSchema = new mongoose.Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
    diagnosis: { type: String, required: true },
    treatment: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

medicalRecordSchema.index({ diagnosis: 'text', treatment: 'text' });  // Full-text search on diagnosis and treatment

module.exports = mongoose.model('MedicalRecord', medicalRecordSchema);
