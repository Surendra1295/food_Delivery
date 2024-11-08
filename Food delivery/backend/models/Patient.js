const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    contact: { type: String, required: true },
    address: { type: String, required: true }
});

patientSchema.index({ name: 1 });  // Index on name for faster searches

module.exports = mongoose.model('Patient', patientSchema);
