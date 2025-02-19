import createPatientController from '../../../src/api/controller/patient.controller.js';
import { jest } from '@jest/globals';

describe('#Patient Controller', () => {
  it('Valid patient info, return 201 code', async () => {
    // Arrange
    const patientService = {
      registerPatient: jest.fn().mockResolvedValue({ success: true })
    };

    const controller = createPatientController(patientService);

    const req = {
      body: { name: 'Pepe', email: 'pepito@gmail.com', address: 'Calle 1234', phone: '12345678' },
      file: 'file1'
    };
    const res = {
      statusCode: 201,
      body: { message: `Paciente ${req.body.name} registrado` },
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis()
    };

    // Act
    const result = await controller.registerPatient(req, res);

    // Assert
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ message: `Paciente ${req.body.name} registrado` });
    expect(result.statusCode).toEqual(201);
    expect(result.body).toEqual({ message: `Paciente ${req.body.name} registrado` });
    expect(patientService.registerPatient).toHaveBeenCalledWith(req.body, req.file);
  });

  it('Problem saving patient info, return 409 code', async () => {
    // Arrange
    const patientService = {
      registerPatient: jest.fn().mockResolvedValue({ success: false })
    };

    const controller = createPatientController(patientService);

    const req = {
      body: { name: 'Pepe', email: 'pepito@gmail.com', address: 'Calle 1234', phone: '12345678' },
      file: 'file1'
    };
    const res = {
      statusCode: 409,
      body: {
        message: `Error al registrar paciente ${req.body.name}. Intentelo nuevamente`
      },
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis()
    };

    // Act
    const result = await controller.registerPatient(req, res);

    // Assert
    expect(res.status).toHaveBeenCalledWith(409);
    expect(res.json).toHaveBeenCalledWith({
      message: `Error al registrar paciente ${req.body.name}. Intentelo nuevamente`
    });
    expect(result.statusCode).toBe(409);
    expect(result.body).toEqual({
      message: `Error al registrar paciente ${req.body.name}. Intentelo nuevamente`
    });
    expect(patientService.registerPatient).toHaveBeenCalledWith(req.body, req.file);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
