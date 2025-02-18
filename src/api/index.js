import createPatientController from './controller/patient.controller.js';
import { patientService } from './service/index.js';

export const patientController = createPatientController(patientService);
