import express from 'express';
import multer from 'multer';
import { patientController } from './index.js';
import { fileFilter, handleMulterErrors, validateRegister } from './middleware.js';

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

export default router;
