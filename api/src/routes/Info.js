const { Router } = require("express");
const { Profesional, Paciente,Especialidad } = require("../db");
const router = Router();

// Usar de la siguiente manera
// Post => email y tipo_usuario devuelve info de tabla gral

router.post("/info", async (req, res, next) => {
  const { email, tipo_usuario} = req.body;
  try {
    if(tipo_usuario === "profesional"){
        const prof = await Profesional.findOne({ where: { usuarioEmail: email },include:{model:Especialidad} })
        return res.status(200).send(prof);
    }
    if(tipo_usuario === "paciente"){
        const paci = await Paciente.findOne({ where: { usuarioEmail: email } })
        return res.status(200).send(paci);
    }
    return res.status(200).send("info incorrecta")
  } catch (err) {
    next(err);
  }
});

module.exports = router;