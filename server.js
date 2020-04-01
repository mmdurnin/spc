const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const nodemailer = require("nodemailer");
const path = require('path');
const cors = require("cors");
const creds1 = require("./config/email");
const creds2 = require("./config/events");

const app = express();
const router = express.Router();

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json());
app.use(cors());
app.use("/", router);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const transport = {
  host: "smtp.gmail.com", 
  port: 587,
  auth: {
    user: creds1.USER,
    pass: creds1.PASS
  }
};

const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

router.post("/send", (req, res, next) => {
  const topic = req.body.topic;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const name = `${firstName} ${lastName}`
  const email = req.body.email;
  const message = req.body.message;
  const subject = `New Message from Contact Form: ${topic}`
  const content = `name: ${name} \n email: ${email} \n message: ${message} `;

  const mail = {
    from: name,
    to: "styleprozcrew.allday@gmail.com", // Change to email address that you want to receive messages on
    subject: subject,
    text: content
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: "fail"
      });
    } else {
      res.json({
        status: "success"
      });
    }
  });
});


const port = process.env.port || 3002;
app.listen(port, () => console.log(`Server is running on port ${port}`));

// const server = app.listen((8081, function () {
//   const port = server.address().port;
//   console.log(`Server started at ${port}`);
// }));