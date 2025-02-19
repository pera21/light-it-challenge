const { createPatientController } = require('../../../src/api/controller/patient.controller.js');

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
    const res = {};

    // Act
    const result = await controller.registerPatient(req, res);

    // Assert
    expect(result.status).toBe(201);
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
    const res = {};

    // Act
    const result = await controller.registerPatient(req, res);

    // Assert
    expect(result.status).toBe(409);
    expect(result.body).toEqual({
      message: `Error al registrar paciente ${req.body.name}. Intentelo nuevamente`
    });
    expect(patientService.registerPatient).toHaveBeenCalledWith(req.body, req.file);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
