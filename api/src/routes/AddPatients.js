const {Router} = require('express');
const {Profesional, Paciente} = require('../db');
const router = Router();

router.post('/add-patients', async(req, res, next) => {
    const {email , idPatients} = req.body;
    console.log("el body es", email, idPatients)
    try {
        const profesionales = await Profesional.findOne({
            where:{
                usuarioEmail: email
            }
        });
        //console.log("los profesionales son ",profesionales);
        //console.log("los valores son ", profesionales.dataValues)
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
    console.log("la query en get es", req.query);
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