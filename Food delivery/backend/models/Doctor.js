const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    specialty: { type: String, required: true },
    contact: { type: String, required: true },
    experience: { type: Number, required: true }
});

doctorSchema.index({ specialty: 1 });  // Index on specialty for faster search

module.exports = mongoose.model('Doctor', doctorSchema);
