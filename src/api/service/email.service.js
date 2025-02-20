import emailNotifications from '../../docs/email-notifications.json' assert { type: 'json' };

function createEmailNotificationService(transporter, sender) {
  async function send(recipient, type) {
    const emailData = emailNotifications[type];
    if (!emailData) {
      console.info(`No se pudo enviar email porque no existe template para ${type}`);
      return;
    }
    const mailOptions = {
      from: `${sender} <${sender.address}>`,
      to: recipient.email,
      subject: emailData.title,
      html: emailData.content
    };
    const sentMessageInfo = await transporter.sendMail(mailOptions);
    const result = {
      delivered: sentMessageInfo.accepted[0] == recipient.email,
      messageId: sentMessageInfo.messageId
    };
    console.info('Resultado del envio de email: %o', result);
  }
  return { send };
}

export default createEmailNotificationService;
