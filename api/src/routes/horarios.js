const { Router } = require("express");
const { Op } = require("sequelize");
const { Horario, Cita } = require("../db");
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

router.get("/horarios", async (req, res, next) => {
  try {
    const { profesionalId, day, date } = req.query;
    const horarios = await Horario.findOne({ where: { profesionalId: profesionalId } });
    const citas = await Cita.findAll({ where: { profesionalId: profesionalId , date: {
      [Op.like] : "%" + date + "%"
    } } });
    let arr = horarios[day];
    arr = arr.filter((h)=> (!(citas.reduce((acc, cv)=> (acc + (cv.date.includes(h))),false))));
    res.send(arr);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
