const { Router } = require("express");
const router = Router();
const {ProfesionalPaciente} = require("../db");

//RUTA PARA CAMBIAR EL ESTADO DISABLE DE LOS PACIENTES (POR DEFECTO FALSE)
// USAR: ENVIAR profesionalId(int), pacienteIds(array[int]), disable(bool)
router.post('/disablePatients', async (req, res, next) => { 
    try {
        const { profesionalId, pacienteIds, disable} = req.body;
        pacienteIds.forEach(async (pacienteId)=>{
        const relation = await ProfesionalPaciente.findOne({where:{profesionalId: profesionalId, pacienteId: pacienteId}})
        relation.disable = disable;
        await relation.save();})
        return res.send("Disable cambiado")
        
    } catch (err) {
        next(err) 
    }
    
})

module.exports = router;