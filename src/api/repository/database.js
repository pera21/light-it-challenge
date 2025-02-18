import mysql from 'mysql2/promise';

async function createDatabaseConnection(config) {
  try {
    const connection = await mysql.createConnection({
      host: config.host,
      user: config.user,
      database: config.database,
      password: config.password,
      port: config.port
    });
    console.log(`Database connected ${config.host}!`);
    return connection;
  } catch (error) {
    console.error(`Error connecting to ${config.host} `, error);
    throw error;
  }
}

export default createDatabaseConnection;
