import createPatientRepository from '../../../src/api/repository/patient.repository.js';
import { jest } from '@jest/globals';

describe('#Patient Repository', () => {
  it('Saving patient succeed, return true', async () => {
    // Arrange
    const dbConnection = {
      beginTransaction: jest.fn(),
      execute: jest.fn().mockResolvedValue([{ insertId: 1 }]),
      commit: jest.fn()
    };

    const repository = createPatientRepository(dbConnection);

    const patientData = {
      name: 'Pepe',
      email: 'pepito@gmail.com',
      address: 'Calle 1234',
      phone: '12345678'
    };
    const file = {
      originalname: 'image (2).png',
      mimetype: 'image/png',
      buffer: Buffer.from('some-buffer')
    };

    // Act
    const result = await repository.savePatient(patientData, file);

    // Assert
    expect(result).toBeTruthy();
    const sqlImage = 'INSERT INTO `document_images`(`name`, `content_type`, `content`) VALUES (?, ?, ?)';
    const imageValues = [file.originalname, file.mimetype, file.buffer];
    expect(dbConnection.execute).toHaveBeenNthCalledWith(1, sqlImage, imageValues);
    const sqlPatient =
      'INSERT INTO `patients`(`name`, `email`, `address`, `phone`, `document_image_id`) VALUES (?, ?, ?, ?, ?)';
    const patientValues = [patientData.name, patientData.email, patientData.address, patientData.phone, 1];
    expect(dbConnection.execute).toHaveBeenNthCalledWith(2, sqlPatient, patientValues);
    expect(dbConnection.commit).toHaveBeenCalled();
  });

  it('Saving patient failed, return false', async () => {
    // Arrange
    const dbConnection = {
      beginTransaction: jest.fn(),
      execute: jest.fn().mockResolvedValue([{ insertId: 1 }]),
      commit: jest.fn().mockRejectedValue(new Error('error'))
    };

    const repository = createPatientRepository(dbConnection);

    const patientData = {
      name: 'Pepe',
      email: 'pepito@gmail.com',
      address: 'Calle 1234',
      phone: '12345678'
    };
    const file = {
      originalname: 'image (2).png',
      mimetype: 'image/png',
      buffer: Buffer.from('some-buffer')
    };

    // Act
    const result = await repository.savePatient(patientData, file);

    // Assert
    expect(result).toBeFalsy();
    const sqlImage = 'INSERT INTO `document_images`(`name`, `content_type`, `content`) VALUES (?, ?, ?)';
    const imageValues = [file.originalname, file.mimetype, file.buffer];
    expect(dbConnection.execute).toHaveBeenNthCalledWith(1, sqlImage, imageValues);
    const sqlPatient =
      'INSERT INTO `patients`(`name`, `email`, `address`, `phone`, `document_image_id`) VALUES (?, ?, ?, ?, ?)';
    const patientValues = [patientData.name, patientData.email, patientData.address, patientData.phone, 1];
    expect(dbConnection.execute).toHaveBeenNthCalledWith(2, sqlPatient, patientValues);
    expect(dbConnection.commit).toHaveBeenCalled();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
