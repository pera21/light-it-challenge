const { createPatientController } = require('./controller/patient.controller.js');
const { patientService } = require('./service/index.js');

const patientController = createPatientController(patientService);
module.exports = { patientController };
