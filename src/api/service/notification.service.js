function createNotificationService(notificationChannel) {
  function sendNotification(patient, channel, content) {
    console.info(`Send notification ${patient.name} to channel ${channel}`);
    return notificationChannel[channel].send(patient, content);
  }

  return { sendNotification };
}

module.exports = { createNotificationService };
