const express = require('express');
const { Router } = require("express");
const router = Router();
const { Profesional, Paciente } = require("../db");
const nodemailer = require("nodemailer");
const { GMAIL, GMAIL_PASS } = process.env;
//const bodyParser = require('body-parser')

// SDK de Mercado Pago
const mercadopago = require('mercadopago');

//middleware
//app.use(bodyParser.urlencoded({ extended: false }));
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// Agrega credenciales



//Routes
router.post('/profesionalpayments', async (req, res, next) => {
    const { idprofesional, idpaciente, price, descripcion ,title} = req.body

    const profesinal = await Profesional.findByPk(idprofesional);
    const paciente = await Paciente.findByPk(idpaciente);

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
            console.log("paso")
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
                from: profesinal.email,
                to: paciente.email,
                subject: title,//nombre del tratamiento
                text: 'Motivo:' + descripcion + ' Link de pago: ' + response.body.init_point,
            };

            transporter.sendMail(mailOptions, (error, info) => {
                error
                    ? res.status(200).send(error.message)
                    : res.status(200).json(req.body);
            });

            //res.json(response.body.init_point)
        }).catch(function (error) {
            console.log(error);
        });
})

module.exports = router;