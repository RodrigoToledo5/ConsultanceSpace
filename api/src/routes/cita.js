const { Router } = require("express");
const { Cita } = require("../db");
const router = Router();

// Usar de la siguiente manera
// Post => mandar date(en formato Date), profesionalId y pacienteId
// Get => enviar get(true) + profesionalId o pacienteId y trae array

router.post("/cita", async (req, res, next) => {
  const { profesionalId, pacienteId, date, get } = req.body;
  try {
    if(get){
        if(profesionalId){
            const citas = await Cita.findAll({ where: { profesionalId: profesionalId } })
            return res.status(200).send(citas);
        }
        if(pacienteId){
        const citas = await Cita.findAll({ where: { pacienteId: pacienteId } })
        return res.status(200).send(citas);}
    }else{
    const newAppointment = await Cita.create({
      date: date,
    });
    await newAppointment.setProfesional(profesionalId);
    await newAppointment.setPaciente(pacienteId);
    return res.status(200).send(newAppointment);
  }} catch (err) {
    res.status(400);
    next(err);
  }
  return res.status(400)
});

module.exports = router;
