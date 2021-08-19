const { Router } = require("express");
const router = Router();
const {Paciente} = require("../db");
const { Op} = require("sequelize");

router.get('/patients', async (req, res, next) => { 
    try {
        const {nombre} = req.query;
        console.log(nombre)
        const patient = await Paciente.findAll({
            where:{
                nombre:{
                    [Op.iLike]: `%${nombre}%`
                }
            }
        })
        return patient ? res.json(patient) : res.send("Paciente no encontrado")
        
    } catch (err) {
        next(err) 
    }
    
})

module.exports = router;

