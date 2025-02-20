import createFileMiddleware from './file.middleware.js';
import createPatientMiddleware from './patient.middleware.js';

export const patientMiddleware = createPatientMiddleware();
export const fileMiddleware = createFileMiddleware();
