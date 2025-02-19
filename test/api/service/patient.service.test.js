const { createPatientService } = require('../../../src/api/service/patient.service.js');

describe('#Patient Service', () => {
  it('Saving patient succeed, return success true', async () => {
    // Arrange
    const patientRepository = {
      savePatient: jest.fn().mockResolvedValue(true)
    };

    const service = createPatientService(patientRepository);

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
    const result = await service.registerPatient(patientData, file);

    // Assert
    expect(result).toEqual({ success: true, message: `Paciente ${patientData.name} registrado con exito` });
    expect(patientRepository.savePatient).toHaveBeenCalledWith(patientData, file);
  });

  it('Saving patient failed, return success false', async () => {
    // Arrange
    const patientRepository = {
      savePatient: jest.fn().mockResolvedValue(false)
    };

    const service = createPatientService(patientRepository);

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
    const result = await service.registerPatient(patientData, file);

    // Assert
    expect(result).toEqual({ success: false, message: `Error al registrar a paciente ${patientData.name}` });
    expect(patientRepository.savePatient).toHaveBeenCalledWith(patientData, file);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
