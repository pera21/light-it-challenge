import createPatientMiddleware from '../../../src/api/middleware/patient.middleware.js';
import { jest } from '@jest/globals';

describe('#Patient Middleware', () => {
  it('Invalid patient name, return 400 code', () => {
    // Arrange
    const next = jest.fn();
    const middleware = createPatientMiddleware();

    const req = {
      body: { name: 'Pepe123', email: 'pepito@gmail.com', address: 'Calle 1234', phone: '12345678' },
      file: 'file1'
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis()
    };

    // Act
    middleware.validateRegister(req, res, next);

    // Assert
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: `Nombre invalido` });
  });

  it('Invalid patient email, return 400 code', () => {
    // Arrange
    const next = jest.fn();
    const middleware = createPatientMiddleware();

    const req = {
      body: { name: 'Pepe', email: 'pepito@gmail', address: 'Calle 1234', phone: '12345678' },
      file: 'file1'
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis()
    };

    // Act
    middleware.validateRegister(req, res, next);

    // Assert
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: `Email invalido` });
  });

  it('Invalid patient address, return 400 code', () => {
    // Arrange
    const next = jest.fn();
    const middleware = createPatientMiddleware();

    const req = {
      body: { name: 'Pepe', email: 'pepito@gmail.com', address: '', phone: '12345678' },
      file: 'file1'
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis()
    };

    // Act
    middleware.validateRegister(req, res, next);

    // Assert
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: `La direccion no puede ser vacia` });
  });

  it('Invalid patient phone, return 400 code', () => {
    // Arrange
    const next = jest.fn();
    const middleware = createPatientMiddleware();

    const req = {
      body: { name: 'Pepe', email: 'pepito@gmail.com', address: 'Calle 1234', phone: '12345678asd' },
      file: 'file1'
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis()
    };

    // Act
    middleware.validateRegister(req, res, next);

    // Assert
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: `Numero de telefono invalido` });
  });

  it('None patient document file, return 400 code', () => {
    // Arrange
    const next = jest.fn();
    const middleware = createPatientMiddleware();

    const req = {
      body: { name: 'Pepe', email: 'pepito@gmail.com', address: 'Calle 1234', phone: '12345678' },
      file: undefined
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis()
    };

    // Act
    middleware.validateRegister(req, res, next);

    // Assert
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: `No se ha subido ninguna imagen de documento` });
  });

  it('Valid patient data, call next', () => {
    // Arrange
    const next = jest.fn();
    const middleware = createPatientMiddleware();

    const req = {
      body: { name: 'Pepe', email: 'pepito@gmail.com', address: 'Calle 1234', phone: '12345678' },
      file: 'file1'
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis()
    };

    // Act
    middleware.validateRegister(req, res, next);

    // Assert
    expect(next).toHaveBeenCalled();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
