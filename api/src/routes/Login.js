const {Router} = require('express');
const axios = require('axios');
const {Usuario} = require('../db');
const router = Router();

router.post('/login', async(req, res, next)=>{
    const {email} = req.body;
    console.log(email)
    try{
        const user = email? await Usuario.findByPk(email) : res.status(404).send("user not found");
        if (user===null) res.status(200).send("user not found")
        else{
            res.status(200).json(user)
        }
    }catch(err){
        next(err)
    }
})

module.exports = router;