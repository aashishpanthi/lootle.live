import nodemailer from "nodemailer";

const sendMail = (to, subject, message) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true, // use SSL
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const options = {
    from: `"${process.env.EMAIL_SENDER}" <${process.env.EMAIL_FROM}>`,
    to,
    subject,
    html: message,
  };

  console.log(process.env.EMAIL_SENDER);

  transporter.sendMail(options, (error, info) => {
    if (error) console.log(error);
    else console.log(info);
  });
};

export default sendMail;
