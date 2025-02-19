const { patientRepository } = require('../repository/index.js');
const { createEmailNotificationService } = require('./email.service.js');
const { createNotificationService } = require('./notification.service.js');
const { createPatientService } = require('./patient.service.js');

const emailNotificationService = createEmailNotificationService();
const notificationService = createNotificationService({ email: emailNotificationService });
const patientService = createPatientService(patientRepository, notificationService);

module.exports = { patientService };
