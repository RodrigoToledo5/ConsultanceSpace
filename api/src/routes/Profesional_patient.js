const { Router } = require("express");
const router = Router();
const {Profesional, Paciente, Horario} = require("../db");

router.get('/relation', async (req, res, next)=>{
    try {
        const { pacienteId } = req.query;
        const relation = await Paciente.findOne({
            where: {
                id: pacienteId
            },
            include:{model:Profesional, include:Horario}
        })
        return relation ? res.json(relation) : res.send("no encontrado")
    } catch (err) {
        next(err)
    }
})



module.exports = router;