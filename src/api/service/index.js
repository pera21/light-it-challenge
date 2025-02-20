import { emailSender, emailSenderCredentials } from '../config.js';
import { patientRepository } from '../repository/index.js';
import createEmailNotificationService from './email.service.js';
import createNotificationService from './notification.service.js';
import createPatientService from './patient.service.js';
import { createTransport } from 'nodemailer';

const transporter = createTransport({
  service: 'gmail',
  auth: { user: emailSenderCredentials.usr, pass: emailSenderCredentials.pass }
});

const sender = {
  name: emailSender.name,
  address: emailSender.address
};

const emailNotificationService = createEmailNotificationService(transporter, sender);
const notificationService = createNotificationService({ email: emailNotificationService });
export const patientService = createPatientService(patientRepository, notificationService);
