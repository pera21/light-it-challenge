function createPatientService(patientRepository, notificationService) {
  async function registerPatient(patientData, documentPhoto) {
    const success = await patientRepository.savePatient(patientData, documentPhoto);
    if (success) {
      await notificationService.sendNotification(patientData, 'email', 'verification-code');
      console.info(`Paciente ${patientData.name} registrado con exito`);
      return { success: true, message: `Paciente ${patientData.name} registrado con exito` };
    }
    console.info(`Error al registrar a paciente ${patientData.name}`);
    return { success: false, message: `Error al registrar a paciente ${patientData.name}` };
  }
  return { registerPatient };
}

export default createPatientService;
