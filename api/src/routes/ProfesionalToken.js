const { Router } = require('express');
const { Op } = require('sequelize');
const { Profesional } = require('../db');
const router = Router();

router.post('/profesionaltoken', async (req, res, next) => {

    ///ya tenemos el token y lo guardamos
    const { id, code } = req.query;
    
    try {
        const profesional = id ? await Profesional.findByPk(id) : res.status(404).send("Id is not recibed");
        if (profesional === null) res.status(200).send("profesional not found")
        else {
            
            res.status(200).json()
        }
    } catch (err) {
        next(err)
    }



})

module.exports = router;