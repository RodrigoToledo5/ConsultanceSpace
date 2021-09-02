const express = require('express');
const { Router } = require("express");
const router = Router();


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
        const {price}=req.body
    // Crea un objeto de preferencia
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