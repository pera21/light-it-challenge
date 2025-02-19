const port = Number(process.env.PORT) || 3000;
const databaseConfig = {
  host: 'localhost',
  user: 'root',
  database: 'light-it-challenge',
  password: '',
  port: 3306
};
module.exports = { port, databaseConfig };
