const { Router } = require("express");
const router = Router();
const {Paciente, profesional_paciente} = require("../db");
const { Op} = require("sequelize");

//filter patients
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

//delete mypatients
router.delete('/del-mypatients', async(req, res, next) => {
    const {idPatients} = req.body;
    try{
        idPatients.forEach(async patient => {
            await profesional_paciente.destroy({
                where: {
                    pacienteId: patient
                }
            });            
        });
        res.sendStatus(200);
    }catch(err){
        next(err);
    }
})

module.exports = router;

