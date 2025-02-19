const mysql = require('mysql2/promise');

let connection = null;

async function createDatabaseConnection(config) {
  if (connection) {
    console.info('Using existing database connection');
    return connection;
  }

  console.info('Creating new database connection...');
  await mysql
    .createConnection(config)
    .then(conn => {
      connection = conn;
      console.info(`Database connected ${config.host}!`);
    })
    .catch(error => {
      console.error(`Error connecting to ${config.host}:`, error);
      throw error;
    });

  return connection;
}

module.exports = { createDatabaseConnection };
