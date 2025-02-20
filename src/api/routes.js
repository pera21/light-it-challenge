import express from 'express';
import multer from 'multer';
import { patientController } from './index.js';
import { fileMiddleware, patientMiddleware } from './middleware/index.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../docs/swagger.json' assert { type: 'json' };

const router = express.Router();

const MAX_SIZE = 5 * 1024 * 1024; //5MB
const storage = multer.memoryStorage();
const upload = multer({ storage, limits: { fileSize: MAX_SIZE }, fileFilter: fileMiddleware.fileFilter });

router.post(
  '/register',
  upload.single('document'),
  fileMiddleware.handleMulterErrors,
  patientMiddleware.validateRegister,
  patientController.registerPatient
);

router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default router;
