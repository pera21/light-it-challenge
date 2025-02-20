import { MulterError } from 'multer';

function createFileMiddleware() {
  function fileFilter(req, file, cb) {
    if (!file.mimetype.startsWith('image/')) {
      return cb(new Error('El archivo debe ser una imagen'));
    }

    cb(null, true);
  }

  function handleMulterErrors(err, req, res, next) {
    if (err instanceof MulterError) {
      return res.status(400).json({ message: err.message });
    } else if (err) {
      return res.status(400).json({ message: err.message });
    }
    next();
  }

  return { fileFilter, handleMulterErrors };
}

export default createFileMiddleware;
