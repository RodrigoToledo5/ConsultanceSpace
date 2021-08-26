const express = require('express');
const { Router } = require("express");
const router = Router();
const { Profesional, Paciente } = require("../db");
//const bodyParser = require('body-parser')

// SDK de Mercado Pago
const mercadopago = require ('mercadopago');

//middleware
//app.use(bodyParser.urlencoded({ extended: false }));
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

    // Agrega credenciales
    mercadopago.configure({
        access_token: 'TEST-4368674018898438-082515-54ad589484f8898752167ffad077862b-812337429'
    });
    

    //Routes
    router.post('/checkout', (req, res, next) => {
        console.log("back_urls")
    // Crea un objeto de preferencia
    let preference = {
        items: [
        {
            title: req.body.title,
            unit_price: parseInt(req.body.price),
            quantity: 1,
        },
        ],
        /* "purpose": 'wallet_purchase', */
        "back_urls": {
            "success": "http://localhost:3000/succes",
            "failure": "http://localhost:3000/failure",
            "pending": "http://localhost:3000/pending"
        },
        "auto_return": "approved",
        
    };
    console.log(preference);
    
    mercadopago.preferences.create(preference)
    .then(function(response){

        //console.log(response.body)
        res.redirect(response.body.init_point)
   
    }).catch(function(error){
        console.log(error);
    });
    })

    module.exports =router;