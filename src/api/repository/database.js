import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

async function createDatabaseConnection() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.MYSQLDB_HOST,
      user: 'root',
      database: process.env.MYSQLDB_DATABASE,
      password: process.env.MYSQLDB_ROOT_PASSWORD,
      port: 3306
    });
    console.log(`Database connected ${process.env.MYSQLDB_HOST}!`);
    return connection;
  } catch (error) {
    console.error(`Error connecting to ${process.env.MYSQLDB_HOST} `, error);
    throw error;
  }
}

export default createDatabaseConnection;
