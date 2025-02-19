function createEmailNotificationService() {
  function send(recipient) {
    console.info(`Email sent to ${recipient.name}`);
  }

  return { send };
}

module.exports = { createEmailNotificationService };
