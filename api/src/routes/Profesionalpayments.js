const express = require('express');
const { Router } = require("express");
const router = Router();
const { Profesional, Paciente } = require("../db");
const nodemailer = require("nodemailer");
const { GMAIL, GMAIL_PASS } = process.env;
//const bodyParser = require('body-parser')

// SDK de Mercado Pago
const mercadopago = require('mercadopago');
const Usuario = require('../models/Usuario');

//middleware
//app.use(bodyParser.urlencoded({ extended: false }));
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// Agrega credenciales



//Routes
router.post('/profesionalpayments', async (req, res, next) => {
    const { idprofesional, idpaciente, price, descripcion ,title} = req.body
    console.log(idprofesional, idpaciente, price, descripcion ,title)
    console.log("profesionalpayment")
    const profesinal = await Profesional.findOne({
        where:{id:idprofesional},
        includes:{model: Usuario}
    });
    const paciente = await Paciente.findOne({
        where:{id:idpaciente},
        includes:{model: Usuario}
    });
    console.log(profesinal.usuarioEmail)
    mercadopago.configure({
        access_token: profesinal.token
    });

    // Crea un objeto de preferencia
    let preference = {
        items: [
            {
                title: title,
                unit_price: parseInt(price),//un precio 1000
                quantity: 1,
            },
        ],
        /* "purpose": 'wallet_purchase', */
        "back_urls": {
            "success": `http://localhost:3000/succes?idpaciente=${idpaciente}&idprofesional=${idprofesional}&price=${price}&descripcion=${descripcion}`,
            "failure": "http://localhost:3000/failure",
            "pending": "http://localhost:3000/pending"
        },
        "auto_return": "approved",

    };
    console.log("paso")
    mercadopago.preferences.create(preference)
        .then(function (response) {
            var transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 465,
                secure: true,
                auth: {
                    user: GMAIL,
                    pass: GMAIL_PASS,
                },
            });

            //let titleUpper = title.charAt(0,1).toUpperCase();
            //let titleResto = title.substring(1,title.length).toLowerCase();
            //let titleComplete = titleUpper + titleResto;

            var mailOptions = {
                from: profesinal.usuarioEmail,
                to: paciente.usuarioEmail,
                subject: 'Tratamiento de parte de: '+profesinal.usuarioEmail,//nombre del tratamiento
                text: 'Motivo: ' + descripcion + '\nLink de pago: ' + response.body.init_point,//esta es el link de pago
            };

            transporter.sendMail(mailOptions, (error, info) => {
                
                
                error
                    ? res.status(500).send(error.message)
                    : res.status(200).json(req.body);
            });

            //res.json(response.body.init_point)
        }).catch(function (error) {
            console.log(error)
        });
})

module.exports = router;