const { Router } = require("express");
const { Horario } = require("../db");
const router = Router();

//Route set horarios, el formato es el siguiente
/*
    id = id del Profesional
    days = {
        lunes:["02:50" , "04:50"],
        martes: []
    }
    solo se modifican los dias pasados como keys, se modifica todo el array
*/
router.post("/horarios", async (req, res, next) => {
  try {
    const { profesionalId, days } = req.body;
    const horarios = await Horario.findOne({ where: { profesionalId: profesionalId } });
    Object.keys(days).forEach((k) => { horarios[k] = days[k]; });
    await horarios.save()
    res.send(horarios);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
