import dotenv from 'dotenv';

dotenv.config();

export const appPort = process.env.APP_PORT || 3000;

export const dbHost = process.env.MYSQLDB_HOST || 'localhost';
export const dbDatabase = process.env.MYSQLDB_DATABASE || 'light-it-challenge';
export const dbRootPass = process.env.MYSQLDB_ROOT_PASSWORD || '';

export const emailSenderCredentials = {
  usr: process.env.EMAIL_SENDER_USR || 'notification.lightit@gmail.com',
  pass: process.env.EMAIL_SENDER_PWD || 'zjkepqdlpnflmsye'
};

export const emailSender = {
  name: process.env.EMAIL_SENDER_NAME || 'Light it',
  address: process.env.EMAIL_SENDER_ADDRESS || 'notification.lightit@gmail.com'
};
