import nodemailer from "nodemailer";
import { smtpconf } from "../config/smtp";

interface ISendEmailRequest {
    sender_email: string,
    recipient_email: string,
    subjetc: string,
    message: string 
}

class SendEmailService {

    async execute({ sender_email, recipient_email, subjetc, message }: ISendEmailRequest) {
        const smtp = nodemailer.createTransport({
            host: smtpconf.host,
            port: smtpconf.port,
            secure: false,
            auth: {
                user: smtpconf.user,
                pass: smtpconf.pass
            },
            tls: {
                rejectUnauthorized: false
            }
        }); 

        const mailSent = await smtp.sendMail({
            to: recipient_email,
            from: sender_email,
            subject: subjetc,
            html: message
        });

        console.log(mailSent);
    }
}

export { SendEmailService };