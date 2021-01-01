import nodemailer from "nodemailer";
import smtpTransport from "nodemailer-smtp-transport";

export default async (req, res) => {
  console.log(process.env.EMAIL, process.env.EMAIL_PASS);
  const transporter = nodemailer.createTransport(
    smtpTransport({
      service: "gmail",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
      },
    })
  );

  const mailOptions = {
    from: req.body.email,
    to: "lucaslnardon@gmail.com",
    subject: "NRD Software Contact",
    text: ` Name: ${req.body.name} \n\n Message: ${req.body.message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    let response;
    if (error) {
      console.error(error);
      response = {
        statusCode: 500,
        body: JSON.stringify({
          error: error.message,
        }),
      };
    }
    response = {
      statusCode: 200,
      body: JSON.stringify({
        message: `Email processed succesfully!`,
      }),
    };
    res.send(response);
  });
};
