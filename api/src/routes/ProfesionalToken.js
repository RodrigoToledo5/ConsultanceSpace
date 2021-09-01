const { Router } = require('express');
const { Op } = require('sequelize');
const { Profesional } = require('../db');
const router = Router();
const axios = require('axios');


router.post('/profesionaltoken', (req, res, next) => {

    ///ya tenemos el token y lo guardamos
    const { id, code } = req.body;
    console.log(id,code)
    // try{
        axios({
            headers:{
                'accept':'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            method: 'POST',
            url: `https://api.mercadopago.com/oauth/token`,
            data: {
              client_secret: "TEST-2493068614496087-083120-0c3b82567a44843c9b0b934a8f58510d-816657501",//va el client secret de prueba para que funcione
              grant_type: "authorization_code",
              code:code,
              redirect_uri:"https://consultancespace.vercel.app/payments"
            }
          }).then((response)=>{
            Profesional.update({
                token:response.data.access_token,
              },{where:{
                id:id,
              }}
            )
            res.status(200).send(response.data)

          }).catch((error)=>{
              next(error)
          })
          //console.log(send.data,"este esta en el try")
         // res.status(200).json(JSON.parse(send.data))

    // }
    // catch(error){
    //     console.log(error.data,"esta esta en el catch")
    //     res.status(400).json(error)
    // }
    



})

module.exports = router;