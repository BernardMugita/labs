const smtpTransport = require("nodemailer-smtp-transport");
const nodemailer = require("nodemailer");

export class MailService {
  transporter = nodemailer.createTransport(
    smtpTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: "support@jenzilabs.co.ke",
        pass: "Escrow$Br00k",
      },
    })
  );

  async sendEmail(email: string, fullname: string, message: string) {
    try {
      const mailOptions = {
        from: {
          name: fullname,
          address: email,
        },
        to: "support@jenzilabs.co.ke",
        subject: "Message from Jenzi Labs",
        text: "You have a new message from " + fullname,
        html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                <h2>New Message from ${fullname}</h2>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            </div>
            `,
      };

      const initializeTradeRequest = await this.transporter.sendMail(
        mailOptions
      );

      initializeTradeRequest.status(200).json({
        status: "success",
        message: `Message sent to: ${initializeTradeRequest.accepted[0]}`,
      });
    } catch (error) {
      console.error(error);
    }
  }
}
