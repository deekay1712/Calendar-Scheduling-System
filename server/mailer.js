import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export async function sendMail(to, body) {
    const info = await transporter.sendMail({
        from: "DeeKay",
        to: to,
        subject: "Meet Invite",
        attachments: [
            {
                filename: "invite.ics",
                content: body,
            },
        ],
    });
    console.log("Invite sent to %s (%s)", to, info.messageId);
}
