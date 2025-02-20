function createNotificationService(notificationChannel) {
  async function sendNotification(patient, channel, type) {
    return await notificationChannel[channel].send(patient, type);
  }

  return { sendNotification };
}

export default createNotificationService;
