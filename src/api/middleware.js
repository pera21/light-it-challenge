import { MulterError } from 'multer';

export function validateRegister(req, res, next) {
  const { name, email, address, phone } = req.body;
  const photo = req.file;

  const nameRegex = /^[a-zA-ZÁÉÍÓÚáéíóú\s]{2,}$/;
  if (!name?.trim() || !nameRegex.test(name)) {
    return res.status(400).json({ message: `Nombre invalido` });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email?.trim() || !emailRegex.test(email)) {
    console.info(`Email invalido`);
    return res.status(400).json({ message: `Email invalido` });
  }

  if (!address?.trim()) {
    console.info(`La direccion no puede ser vacia`);
    return res.status(400).json({ message: `La direccion no puede ser vacia` });
  }

  const phoneRegex = /^[0-9\s]{6,}$/;
  if (!phone?.trim() || !phoneRegex.test(phone)) {
    console.info(`Numero de telefono invalido`);
    return res.status(400).json({ message: `Numero de telefono invalido` });
  }

  if (!photo) {
    console.info(`No se ha subido ninguna imagen de documento`);
    return res.status(400).json({ message: `No se ha subido ninguna imagen de documento` });
  }

  next();
}

export function fileFilter(req, file, cb) {
  if (!file) {
    return cb(new Error('No se ha subido ninguna imagen de documento'));
  }
  if (!file.mimetype.startsWith('image/')) {
    return cb(new Error('El archivo debe ser una imagen'));
  }

  cb(null, true);
}

export function handleMulterErrors(err, req, res, next) {
  if (err instanceof MulterError) {
    return res.status(400).json({ message: err.message });
  } else if (err) {
    return res.status(400).json({ message: err.message });
  }
  next();
}
