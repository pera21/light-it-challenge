import { patientRepository } from '../repository/index.js';
import createEmailNotificationService from './email.service.js';
import createNotificationService from './notification.service.js';
import createPatientService from './patient.service.js';

const emailNotificationService = createEmailNotificationService();
const notificationService = createNotificationService({ email: emailNotificationService });
export const patientService = createPatientService(patientRepository, notificationService);
