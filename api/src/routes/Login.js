const {Router} = require('express');
const axios = require('axios');
const {Usuario} = require('../db');
const router = Router();

//Route for set and get Proff Stock

router.post('/login', async(req, res, next)=>{
    const {email} = req.body;
    console.log(email)
    try{
        const user = email? await Usuario.findByPk(email) : null;
        if (user===null) res.status(404).json("user not found")
        else{
            res.status(200).json(user)
        }
    }catch(err){
        next(err)
    }
})

module.exports = router;