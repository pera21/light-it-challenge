function createPatientRepository(dbConnection) {
  async function savePatient(patientData, documentPhoto) {
    try {
      await dbConnection.beginTransaction();
      const sqlImage = 'INSERT INTO `document_images`(`name`, `content_type`, `content`) VALUES (?, ?, ?)';
      const imageValues = [documentPhoto.originalname, documentPhoto.mimetype, documentPhoto.buffer];
      const [resultImage] = await dbConnection.execute(sqlImage, imageValues);
      const imageId = resultImage.insertId;

      const sqlPatient =
        'INSERT INTO `patients`(`name`, `email`, `address`, `phone`, `document_image_id`) VALUES (?, ?, ?, ?, ?)';
      const patientValues = [
        patientData.name,
        patientData.email,
        patientData.address,
        patientData.phone,
        imageId
      ];
      await dbConnection.execute(sqlPatient, patientValues);
      await dbConnection.commit();
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }
  return { savePatient };
}

export default createPatientRepository;
