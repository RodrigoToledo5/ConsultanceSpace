const express = require('express');
const { Router, response } = require("express");
const router = Router();
const { Profesional, Paciente } = require("../db");
const CLIENT = require('../..');
//const bodyParser = require('body-parser')


// SDK de Mercado Pago
const mercadopago = require ('mercadopago');


//middleware
//app.use(bodyParser.urlencoded({ extended: false }));
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

    // Agrega credenciales
    mercadopago.configure({
        access_token: 'APP_USR-5695753117844767-081805-6df2734e30e78f9a416ef743c8da938b-249576982'
    });


    //Routes
    router.post('/checkout', (req, res, next) => {
        console.log("back_urls")
        const price=1000;
        const {id}=req.body
        const comprobante=uuid();
        Pago.create({
            comprobante: comprobante,
            completado:false,
        }).then((response)=>{
            response.setProfesional(id)
        }).catch((error)=>{
            console.log(error)
        })
    let preference = {
        
        items: [
        {
            title: req.body.title,
            unit_price: parseInt(price),//un precio 1000
            quantity: 1,
        },
        ],
        /* "purpose": 'wallet_purchase', */
        "back_urls": {
            "success": `${CLIENT}/subscription?wallet=${comprobante}&id=${id}&success=done`,
            "failure": `${CLIENT}/failure`,
            "pending": `${CLIENT}/pending`
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