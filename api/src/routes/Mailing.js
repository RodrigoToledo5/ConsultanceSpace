const { Router } = require("express");
const nodemailer = require("nodemailer");
const router = Router();
const { Paciente } = require("../db");

const { GMAIL, GMAIL_PASS } = process.env;

//ruta para envio de mails
router.post("/sendEmail", async (req, res) => {
  const {
    paciente,
    profesional,
    idPatient,
    professional,
    subject,
    text,
  } = req.body;
  let {patient} = req.body;
  console.log(profesional, patient, subject, text);
  if (paciente) {
    var transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: GMAIL,
        pass: GMAIL_PASS,
      },
    });

    var mailOptions = {
      from: "Gestor médico Consultance Space",
      to: professional,
      subject: subject,
      text: text,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      error
        ? res.status(500).send(error.message)
        : res.status(200).json(req.body);
    });
  }

  if (profesional) {
    if (idPatient) {
      patient = await Paciente.findOne({ where: { id: idPatient } });
      patient = patient ? patient.usuarioEmail : res.status(500);
    }

    var transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: GMAIL,
        pass: GMAIL_PASS,
      },
    });

    var mailOptions = {
      from: "Gestor médico Consultance Space",
      to: patient,
      subject: subject,
      text: text,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      console.log("se envio correo desde professional dashboard");
      error
        ? res.status(500).send(error.message)
        : res.status(200).json(req.body);
    });
  }
});

router.post("/contactEmail", async (req, res) => {
  console.log(req.body)
  const {
    emailProfesional,
    emailPaciente,
    subject,
    text,
    isPatient,
    isProfessional
  } = req.body;

  if (isPatient) {
    var transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: GMAIL,
        pass: GMAIL_PASS,
      },
    });

    var mailOptions = {
      from: emailPaciente,
      to: emailProfesional,
      subject: subject,
      text: text,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      error
        ? res.status(500).send(error.message)
        : res.status(200).json(req.body);
    });
  }

  if (isProfessional) {
    var transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: GMAIL,
        pass: GMAIL_PASS,
      },
    });

    var mailOptions = {
      from: emailPaciente,
      to: emailProfesional,//cuidado porque aca es para cuando se envia de profesional a profesional
      subject: subject,
      text: text,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      console.log("se envio correo desde professional dashboard");
      error
        ? res.status(500).send(error.message)
        : res.status(200).json(req.body);
    });
  }
});



module.exports = router;
