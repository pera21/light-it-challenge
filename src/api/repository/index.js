const { createDatabaseConnection } = require('./database.js');
const { createPatientRepository } = require('./patient.repository.js');
const { databaseConfig } = require('../config.js');

const patientRepositoryPromise = createDatabaseConnection(databaseConfig)
  .then(dbConnection => {
    return createPatientRepository(dbConnection);
  })
  .catch(error => {
    console.error('Error creating patientRepository:', error);
    process.exit(1);
  });

module.exports = { patientRepository: patientRepositoryPromise };
