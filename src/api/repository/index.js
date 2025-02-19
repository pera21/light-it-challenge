import createDatabaseConnection from './database.js';
import createPatientRepository from './patient.repository.js';

const dbConnection = await createDatabaseConnection();
export const patientRepository = createPatientRepository(dbConnection);
