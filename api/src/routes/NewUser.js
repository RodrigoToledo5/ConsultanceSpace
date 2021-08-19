const { Router } = require("express");
const {
  Paciente,
  Usuario,
  Profesional,
  Especialidad,
  Stock,
} = require("../db");
const router = Router();

//ROUTE TO CREATE PATIENTS AND PROFESSIONALS
router.post("/newUser", async (req, res, next) => {
  const {
    type,
    dni,
    name,
    lastName,
    phone,
    birth,
    address,
    country,
    cedula,
    especialidad,
    id_Historia_Clinica,
    email,
  } = req.body;
  console.log(
    type,
    dni,
    name,
    lastName,
    phone,
    birth,
    address,
    country,
    cedula,
    especialidad,
    id_Historia_Clinica,
    email
  );
  try {
    await Usuario.create({
      email,
      tipo_usuario: type,
    });
  } catch (err) {
    next(err);
  }

  if (type === "paciente") {
    try {
      const createdPatient = await Paciente.create({
        cedula: dni,
        nombre: name.toUpperCase(),
        apellidos: lastName.toUpperCase(),
        telefono: phone,
        fecha_de_nacimiento: birth,
        direccion: address,
        pais: country,
      });
      await createdPatient.setUsuario(email);
      console.log(createdPatient);
      return res.status(200).send("Registro exitoso");
    } catch (err) {
      next(err);
    }
  } else if (type === "profesional") {
    try {
      // ****** Creacion de especialidades bloqueada por crash ******** //
      //
      // let allSpecialty = especialidad.map(esp => {
      //     return Especialidad.findOrCreate({
      //         where:{
      //             nombre: esp
      //         }
      //     })
      // })
      // let relSpecialties = await Promise.all(allSpecialty);
      //

      const createdProfesional = await Profesional.create({
        cedula: dni,
        nombre: name.toUpperCase(),
        apellidos: lastName.toUpperCase(),
        telefono: phone,
        direccion: address,
        fecha_de_nacimiento: birth,
        pais: country,
      });
      await createdProfesional.setUsuario(email);

      // ****** Creacion de especialidades bloqueada por crash ******** //
      //
      // relSpecialties.forEach(esp => createdProfesional.setEspecialidads(esp[0]));
      //

      //create stock and rel with professional
      const emptyArr = [];
      const stock = await Stock.create({
        emptyArr,
        emptyArr,
      });
      await stock.setUsuario(email);
      return res.status(200).json(createdProfesional);
    } catch (err) {
      next(err);
    }
  } else {
    res.send("Need a type of user");
  }
});

//ROUTE TO BRING THE SPECIALTIES

router.get("/specialtys", async (req, res, next) => {
  const specialties = await Especialidad.findAll();
  res.status(200).json(specialties);
});

module.exports = router;
