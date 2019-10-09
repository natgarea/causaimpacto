const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: `${process.env.EMAIL_ADDRESS}`,
      pass: `${process.env.EMAIL_PWD}`
    }
  });

module.exports = transporter;
