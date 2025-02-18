import { databaseConfig } from '../config.js';
import createDatabaseConnection from './database.js';
import createPatientRepository from './patient.repository.js';

const dbConnection = await createDatabaseConnection(databaseConfig);
export const patientRepository = createPatientRepository(dbConnection);
