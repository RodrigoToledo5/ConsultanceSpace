const {Router} = require('express');
const {Profesional, Paciente} = require('../db');
const ProfesionalPaciente = require('../models/ProfesionalPaciente');
const router = Router();

router.post('/add-patients', async(req, res, next) => {
    const {email , idPatients} = req.body;
    try {
        const profesionales = await Profesional.findOne({
            where:{
                usuarioEmail: email
            }
        });
        await profesionales.addPacientes(idPatients)
        const patientsList = await Profesional.findOne({
            attributes: ['id','usuarioEmail',],
            where:{
                usuarioEmail: email
            },
            include:{
                model: Paciente
            }
        })
        res.send(patientsList)
    } catch (error) {
        res.send(400);
        next(error)
    }
});
router.get('/my-patients',async (req, res, next) =>{
    const {email} = req.query;
    try {
        const myPatients = await Profesional.findOne({
            attributes: ['id','usuarioEmail',],
            where:{
                usuarioEmail: email
            },
            include:{
                model: Paciente
            }
        })
        res.send(myPatients);
    } catch (error) {
        next(error)
    }
})


module.exports = router;