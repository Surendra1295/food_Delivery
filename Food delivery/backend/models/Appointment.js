const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
    date: { type: Date, required: true },
    status: { type: String, default: 'Scheduled' }
});

appointmentSchema.index({ date: 1 });  // Index on date for quick access to appointment scheduling

module.exports = mongoose.model('Appointment', appointmentSchema);
