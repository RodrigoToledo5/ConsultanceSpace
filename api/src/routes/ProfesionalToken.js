const { Router } = require('express');
const { Op } = require('sequelize');
const { Profesional } = require('../db');
const router = Router();
const axios = require('axios');


router.post('/profesionaltoken', async (req, res, next) => {

    ///ya tenemos el token y lo guardamos
    const { id, code } = req.body;
    console.log(typeof(code))
    try{
        const send = await axios({
            headers:{
                accept: `application/json`,
                'content-tipe':'application/x-www-form-urlencoded'
            },

            method: 'POST',
            url: `https://api.mercadopago.com/oauth/token`,
            data: {
              client_secret: "dbXXNFs2LCkaTxK9zLP6cZZVlf61q29h",
              grant_type: "authorization_code",
              code:code,
              redirect_uri:"https://consultancespace.vercel.app/payments"
            }
          })
          console.log(send)
          res.status(200).json(send)

    }
    catch(error){
        res.status(200).json(error)
    }
    



})

module.exports = router;