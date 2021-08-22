const { Router } = require("express");
const { Cita, Paciente, Profesional } = require("../db");
const router = Router();

// Usar de la siguiente manera
// Post => mandar date(en formato Date), profesionalId y pacienteId (y note opcional)
// Post(get) => enviar get(true) + profesionalId o pacienteId y trae array
// Delete => enviar Id de la cita
// Put => enviar id y parametro a modificar (pueden ser varios)

router.post("/cita", async (req, res, next) => {
  const { profesionalId, pacienteId, date, get, note } = req.body;
  console.log(pacienteId)
  try {
    if (get) {
      if (profesionalId) {
        let citas = await Cita.findAll({
          where: { profesionalId: profesionalId },
        });
        citas  = citas.map((c) => c.dataValues);
        const pacs = await Paciente.findAll();
        citas = citas.map((c) => {
          const fn = pacs.find((p) => p.id === c.pacienteId).fullName;
          return { ...c, pacienteFullName: fn };
        });
        return res.status(200).send(citas);
      }
      if (pacienteId) {
        const citas = await Cita.findAll({ where: { pacienteId: pacienteId } });
        citas.map((c) => c.dataValues);
        const pros = await Profesional.findAll();
        citas.map((c) => {
          const fn = pros.find((p) => p.id === c.profesionalId).fullName;
          return { ...c, profesionalFullName: fn };
        });
        return res.status(200).send(citas);
      }
    } else {
      const newAppointment = await Cita.create({
        date: date,
        note: note,
      });
      await newAppointment.setProfesional(profesionalId);
      await newAppointment.setPaciente(pacienteId);
      return res.status(200).send(newAppointment);
    }
  } catch (err) {
    res.status(400);
    next(err);
  }
  return res.status(400);
});

router.delete("/cita", async (req, res, next) => {
  const { id } = req.body;
  try {
    if (id) {
      let cita = await Cita.findOne({
        where: { id: id },
      });
      if (!cita) return res.status(200).send("la cita no existe");
      await cita.destroy();
      return res.status(200).send("cita eliminada");
    }
    return res.status(200).send("id incorrecto");
  } catch (err) {
    res.status(400);
    next(err);
  }
  return res.status(400);
});

router.put("/cita", async (req, res, next) => {
  const { id, status, date, note } = req.body;
  try {
    if (id) {
      let cita = await Cita.findOne({
        where: { id: id },
      });
      if (!cita) return res.status(200).send("la cita no existe");
      status && (cita.status = status);
      date && (cita.date = date);
      note && (cita.note = note);
      await cita.save();
      return res.status(200).send("cita modificada");
    }
    return res.status(200).send("id incorrecto");
  } catch (err) {
    res.status(400);
    next(err);
  }
  return res.status(400);
});


module.exports = router;
