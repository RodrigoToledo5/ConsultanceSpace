const { Router } = require("express");
const router = Router();
const {Paciente} = require("../db");
const { Op} = require("sequelize");

router.get('/patients', async (req, res, next) => { 
    try {
        const {nombre} = req.query;
        console.log(nombre)
        const patient = await Paciente.findAll()
        const patientFound = patient.filter((elemento)=> {
            if(elemento.fullName.includes(nombre.toUpperCase())) return true
            return false  
        })
        return patient ? res.json(patientFound) : res.send("Paciente no encontrado")
        
    } catch (err) {
        next(err) 
    }
    
})

module.exports = router;

