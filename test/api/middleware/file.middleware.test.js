import createFileMiddleware from '../../../src/api/middleware/file.middleware.js';
import { jest } from '@jest/globals';

describe('#File Middleware', () => {
  it('File is an image, call cb with true', () => {
    const req = {};
    const file = { mimetype: 'image/png' };
    const cb = jest.fn();

    const middleware = createFileMiddleware();

    middleware.fileFilter(req, file, cb);

    expect(cb).toHaveBeenCalledWith(null, true);
  });

  it('File is not an image, call cb with false', () => {
    const req = {};
    const file = { mimetype: 'text/plain' };
    const cb = jest.fn();

    const middleware = createFileMiddleware();

    middleware.fileFilter(req, file, cb);

    expect(cb).toHaveBeenCalledWith(new Error('El archivo debe ser una imagen'));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
