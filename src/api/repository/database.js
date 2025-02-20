import mysql from 'mysql2/promise';
import { dbDatabase, dbHost, dbRootPass } from '../config.js';

async function createDatabaseConnection() {
  try {
    const connection = await mysql.createConnection({
      host: dbHost,
      user: 'root',
      database: dbDatabase,
      password: dbRootPass,
      port: 3306
    });
    console.log(`Database connected ${dbHost}!`);
    return connection;
  } catch (error) {
    console.error(`Error connecting to ${dbHost} `, error);
    throw error;
  }
}

export default createDatabaseConnection;
