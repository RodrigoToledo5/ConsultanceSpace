const { Router } = require("express");
const router = Router();
const {Paciente} = require("../db");
const { Op} = require("sequelize");

router.get('/patients', async (req, res, next) => { 
    try {
        const {nombre} = req.query;
        const patient = await Paciente.findAll()
        const patientFound = patient.filter((elemento)=>elemento.fullName === nombre.toUpperCase())
        return patient ? res.json(patientFound) : res.send("Paciente no encontrado")
        
    } catch (err) {
        next(err) 
    }
    
})

module.exports = router;

