function createPatientController(patientService) {
  async function registerPatient(req, res) {
    console.info(`Paciente ${req.body.name} esta en proceso de registro`);
    const result = await patientService.registerPatient(req.body, req.file);
    if (result.success) {
      return res.status(201).json({ message: `Paciente ${req.body.name} registrado` });
    }
    return res
      .status(409)
      .json({ message: `Error al registrar paciente ${req.body.name}. Intentelo nuevamente` });
  }
  return { registerPatient };
}

module.exports = { createPatientController };
