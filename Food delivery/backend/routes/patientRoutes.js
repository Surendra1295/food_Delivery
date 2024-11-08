const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

router.post('/', patientController.createPatient);  // Create patient
router.get('/', patientController.getAllPatients);  // Get all patients

module.exports = router;
