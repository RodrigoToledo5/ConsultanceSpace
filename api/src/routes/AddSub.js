const { Router } = require("express");
const { Profesional } = require("../db");
const router = Router();

// Enivas ID del profesional y se suman 30 dias a la subscripcion :)
router.post("/addSub", async (req, res, next) => {
  const { id } = req.body;
  try {
    if (id) {
      let prof = await Profesional.findOne({
        where: { id: id },
      });
      if (!prof) return res.status(200).send("id incorrecto");
      if (subVencida(prof.subscripcion)) {
        prof.subscripcion = dateLinda(new Date().addDays(30));
      } else {
        // de Date linda a Date js
        const day = prof.subscripcion.substring(0, 2);
        const month = prof.subscripcion.substring(3, 5);
        const year = prof.subscripcion.substring(6, 10);
        const dates = new Date(month + "/" + day + "/" + year);
        dates.setHours(0, 0, 0, 0);
        // sumamos los dias y volvemos a dateLinda!
        prof.subscripcion = dateLinda(dates.addDays(30));
      }
      await prof.save();
      return res.status(200).send(prof);
    }
    return res.status(200).send("id incorrecto");
  } catch (err) {
    res.status(400);
    next(err);
  }
});

// te manda una suscripcion de 1970, para pruebas y troleo
router.delete("/addSub", async (req, res, next) => {
  const { id } = req.body;
  try {
    if (id) {
      let prof = await Profesional.findOne({
        where: { id: id },
      });
      if (!prof) return res.status(200).send("id incorrecto");
      prof.subscripcion = dateLinda(new Date("December 17, 1970 03:24:00"));
      await prof.save();
      return res.status(200).send(prof);
    }
    return res.status(200).send("id incorrecto");
  } catch (err) {
    res.status(400);
    next(err);
  }
});

// Asi es el prototipado champagne (gracias StackOverflow)
Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

// Devuelve true si vencio la suscripcion
const subVencida = (match) => {
  const day = match.substring(0, 2);
  const month = match.substring(3, 5);
  const year = match.substring(6, 10);
  const dates = new Date(month + "/" + day + "/" + year);
  dates.setHours(0, 0, 0, 0);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return dates < today;
};

//Deja las dates como un bello string
const dateLinda = (date) => {
  const dateStr = date.toString().substr(0, 21);
  let month = date.getMonth() + 1;
  month = month > 9 ? month.toString() : "0" + month.toString();
  return (
    dateStr.substring(8, 10) + "/" + month + "/" + dateStr.substring(11, 15)
  );
};

module.exports = router;
