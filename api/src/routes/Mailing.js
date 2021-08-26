const {Router} = require('express');
const nodemailer = require('nodemailer');
const router = Router();

const { GMAIL, GMAIL_PASS } = process.env;

//ruta para envio de mails
router.post('/sendEmail', (req,res)=>{
    const {paciente, profesional, patient, professional, subject, text} = req.body;
    console.log( profesional, patient, subject, text)
    if(paciente){
    var transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth:{
            user:GMAIL,
            pass:GMAIL_PASS,
        }
    });

    var mailOptions = {
        from: "Gestor médico Consultance Space",
        to: professional,
        subject: subject,
        text: text,
    }

    transporter.sendMail(mailOptions, (error, info)=>{
        console.log("se envio correo desde pacient dashboard")
        error ? res.status(500).send(error.message) : res.status(200).json(req.body)
    })

    }

    if(profesional){
        
    var transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth:{
            user:GMAIL,
            pass:GMAIL_PASS,
        }
    });

    var mailOptions = {
        from: "Gestor médico Consultance Space",
        to: patient,
        subject: subject,
        text: text,
    }

    transporter.sendMail(mailOptions, (error, info)=>{
        console.log("se envio correo desde professional dashboard")
        error ? res.status(500).send(error.message) : res.status(200).json(req.body)
    })

    } 
  
})


module.exports = router;