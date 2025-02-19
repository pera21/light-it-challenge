const express = require('express');
const multer = require('multer');
const { patientController } = require('./index.js');
const { fileFilter, handleMulterErrors, validateRegister } = require('./middleware.js');

const router = express.Router();

const MAX_SIZE = 5 * 1024 * 1024; //5MB
const storage = multer.memoryStorage();
const upload = multer({ storage, limits: { fileSize: MAX_SIZE }, fileFilter: fileFilter });

router.post(
  '/register',
  upload.single('document'),
  handleMulterErrors,
  validateRegister,
  patientController.registerPatient
);

module.exports = { router };
