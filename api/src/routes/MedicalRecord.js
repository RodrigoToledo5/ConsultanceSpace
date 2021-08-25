const { Router } = require("express");
const router = Router();
const {
  AntecedentesPatologicos,
  AntecedentesNoPatologicos,
  Paciente,
} = require("../db");

//Route for create medical record, send: antecedentesPatologicos OR antecedentesNoPatologicos
//AND idPaciente by body
router.post("/medicalRecord", async (req, res, next) => {
  const {
    antecedentesPatologicos,
    antecedentesNoPatologicos,
    idPaciente,
    embarazo,
    enfermedades_infancia,
    accidente,
    transfusion,
    operacion,
    alergia,
    cooperador,
    orientado,
    constitucion,
    complexion,
    facie,
    conformacion,
    movimientos_anormales,
    marchas_patologicas,
    bajo_tratamiento,
    pildoras_anticonceptivas,
    diabetes,
    hepatitis,
    tosferina,
    hemorragias,
    cardiopatias,
    hipotension,
    hipertension,
    fiebre_reumatica,
    paludismo,
    VIH,
    parasitos,
    sarampion,
    amigdalitis,
    epilepsia,
    ETS,
    comentarios,
    alimentacion,
    higiene_corporal,
    higiene_bucal,
    vacunas,
    toxicomanias,
    alcoholismo,
    tabaquismo,
    tatuajes,
  } = req.body;

  if (antecedentesPatologicos) {
    try {
      const patologicos = await AntecedentesPatologicos.create({
        embarazo,
        enfermedades_infancia,
        accidente,
        transfusion,
        operacion,
        alergia,
        cooperador,
        orientado,
        constitucion,
        complexion,
        facie,
        conformacion,
        movimientos_anormales,
        marchas_patologicas,
        bajo_tratamiento,
        pildoras_anticonceptivas,
        diabetes,
        hepatitis,
        tosferina,
        hemorragias,
        cardiopatias,
        hipotension,
        hipertension,
        fiebre_reumatica,
        paludismo,
        VIH,
        parasitos,
        sarampion,
        amigdalitis,
        epilepsia,
        ETS,
        comentarios,
      });
      await patologicos.setPaciente(idPaciente);
      return res.status(200).send("Registro exitoso");
    } catch (err) {
      next(err);
    }
  }

  if (antecedentesNoPatologicos) {
    try {
      const noPatologicos = await AntecedentesNoPatologicos.create({
        alimentacion,
        higiene_corporal,
        higiene_bucal,
        vacunas,
        toxicomanias,
        alcoholismo,
        tabaquismo,
        tatuajes,
        comentarios,
      });
      await noPatologicos.setPaciente(idPaciente);
      return res.status(200).send("Registro exitoso");
    } catch (err) {
      next(err);
    }
  }
});

//Route for get medical record, send: idPaciente by query

router.get("/medicalRecord", async (req, res) => {
  const { idPaciente } = req.query;
  const medicalRecordPatologicos = await Paciente.findByPk(idPaciente, {
    include: [AntecedentesPatologicos, AntecedentesNoPatologicos],
  });
  return res.status(200).json(medicalRecordPatologicos);
});

//Route for update medical record, send: idPaciente AND antecedentesPatologicos,
//OR antecedentesNoPatologicos AND field to update for body.

router.put("/medicalRecord", async (req, res, next) => {
  const {
    antecedentesPatologicos,
    antecedentesNoPatologicos,
    idPaciente,
    embarazo,
    enfermedades_infancia,
    accidente,
    transfusion,
    operacion,
    alergia,
    cooperador,
    orientado,
    constitucion,
    complexion,
    facie,
    conformacion,
    movimientos_anormales,
    marchas_patologicas,
    bajo_tratamiento,
    pildoras_anticonceptivas,
    diabetes,
    hepatitis,
    tosferina,
    hemorragias,
    cardiopatias,
    hipotension,
    hipertension,
    fiebre_reumatica,
    paludismo,
    VIH,
    parasitos,
    sarampion,
    amigdalitis,
    epilepsia,
    ETS,
    comentarios,
    alimentacion,
    higiene_corporal,
    higiene_bucal,
    vacunas,
    toxicomanias,
    alcoholismo,
    tabaquismo,
    tatuajes,
  } = req.body;

  if (antecedentesPatologicos) {
    try {
      const patient = await Paciente.findByPk(idPaciente);
      const idPatologicos = patient.antecedentesPatologicoId;

      if (embarazo !== null) {
        await AntecedentesPatologicos.update(
          {
            embarazo,
          },
          {
            where: {
              id: idPatologicos,
            },
          }
        );
      }
      if (enfermedades_infancia) {
        await AntecedentesPatologicos.update(
          {
            enfermedades_infancia,
          },
          {
            where: {
              id: idPatologicos,
            },
          }
        );
      }
      if (accidente) {
        await AntecedentesPatologicos.update(
          {
            accidente,
          },
          {
            where: {
              id: idPatologicos,
            },
          }
        );
      }

      if (transfusion !== null) {
        await AntecedentesPatologicos.update(
          {
            transfusion,
          },
          {
            where: {
              id: idPatologicos,
            },
          }
        );
      }

      if (operacion) {
        await AntecedentesPatologicos.update(
          {
            operacion,
          },
          {
            where: {
              id: idPatologicos,
            },
          }
        );
      }
      if (alergia) {
        await AntecedentesPatologicos.update(
          {
            alergia,
          },
          {
            where: {
              id: idPatologicos,
            },
          }
        );
      }
      if (cooperador !== null) {
        await AntecedentesPatologicos.update(
          {
            cooperador,
          },
          {
            where: {
              id: idPatologicos,
            },
          }
        );
      }
      if (orientado !== null) {
        await AntecedentesPatologicos.update(
          {
            orientado,
          },
          {
            where: {
              id: idPatologicos,
            },
          }
        );
      }
      if (constitucion) {
        await AntecedentesPatologicos.update(
          {
            constitucion,
          },
          {
            where: {
              id: idPatologicos,
            },
          }
        );
      }
      if (complexion) {
        await AntecedentesPatologicos.update(
          {
            complexion,
          },
          {
            where: {
              id: idPatologicos,
            },
          }
        );
      }
      if (facie) {
        await AntecedentesPatologicos.update(
          {
            facie,
          },
          {
            where: {
              id: idPatologicos,
            },
          }
        );
      }
      if (conformacion) {
        await AntecedentesPatologicos.update(
          {
            conformacion,
          },
          {
            where: {
              id: idPatologicos,
            },
          }
        );
      }
      if (movimientos_anormales) {
        await AntecedentesPatologicos.update(
          {
            movimientos_anormales,
          },
          {
            where: {
              id: idPatologicos,
            },
          }
        );
      }
      if (marchas_patologicas) {
        await AntecedentesPatologicos.update(
          {
            marchas_patologicas,
          },
          {
            where: {
              id: idPatologicos,
            },
          }
        );
      }
      if (bajo_tratamiento !== null) {
        await AntecedentesPatologicos.update(
          {
            bajo_tratamiento,
          },
          {
            where: {
              id: idPatologicos,
            },
          }
        );
      }
      if (pildoras_anticonceptivas !== null) {
        await AntecedentesPatologicos.update(
          {
            pildoras_anticonceptivas,
          },
          {
            where: {
              id: idPatologicos,
            },
          }
        );
      }
      if (diabetes !== null) {
        await AntecedentesPatologicos.update(
          {
            diabetes,
          },
          {
            where: {
              id: idPatologicos,
            },
          }
        );
      }
      if (hepatitis !== null) {
        await AntecedentesPatologicos.update(
          {
            hepatitis,
          },
          {
            where: {
              id: idPatologicos,
            },
          }
        );
      }
      if (tosferina !== null) {
        await AntecedentesPatologicos.update(
          {
            tosferina,
          },
          {
            where: {
              id: idPatologicos,
            },
          }
        );
      }
      if (hemorragias !== null) {
        await AntecedentesPatologicos.update(
          {
            hemorragias,
          },
          {
            where: {
              id: idPatologicos,
            },
          }
        );
      }
      if (cardiopatias !== null) {
        await AntecedentesPatologicos.update(
          {
            cardiopatias,
          },
          {
            where: {
              id: idPatologicos,
            },
          }
        );
      }
      if (hipotension !== null) {
        await AntecedentesPatologicos.update(
          {
            hipotension,
          },
          {
            where: {
              id: idPatologicos,
            },
          }
        );
      }
      if (hipertension !== null) {
        await AntecedentesPatologicos.update(
          {
            hipertension,
          },
          {
            where: {
              id: idPatologicos,
            },
          }
        );
      }
      if (fiebre_reumatica !== null) {
        await AntecedentesPatologicos.update(
          {
            fiebre_reumatica,
          },
          {
            where: {
              id: idPatologicos,
            },
          }
        );
      }
      if (paludismo !== null) {
        await AntecedentesPatologicos.update(
          {
            paludismo,
          },
          {
            where: {
              id: idPatologicos,
            },
          }
        );
      }
      if (bajo_tratamiento !== null) {
        await AntecedentesPatologicos.update(
          {
            bajo_tratamiento,
          },
          {
            where: {
              id: idPatologicos,
            },
          }
        );
      }
      if (VIH !== null) {
        await AntecedentesPatologicos.update(
          {
            VIH,
          },
          {
            where: {
              id: idPatologicos,
            },
          }
        );
      }
      if (parasitos !== null) {
        await AntecedentesPatologicos.update(
          {
            parasitos,
          },
          {
            where: {
              id: idPatologicos,
            },
          }
        );
      }
      if (sarampion !== null) {
        await AntecedentesPatologicos.update(
          {
            sarampion,
          },
          {
            where: {
              id: idPatologicos,
            },
          }
        );
      }
      if (amigdalitis !== null) {
        await AntecedentesPatologicos.update(
          {
            amigdalitis,
          },
          {
            where: {
              id: idPatologicos,
            },
          }
        );
      }
      if (epilepsia !== null) {
        await AntecedentesPatologicos.update(
          {
            epilepsia,
          },
          {
            where: {
              id: idPatologicos,
            },
          }
        );
      }
      if (ETS) {
        await AntecedentesPatologicos.update(
          {
            ETS,
          },
          {
            where: {
              id: idPatologicos,
            },
          }
        );
      }
      if (comentarios) {
        await AntecedentesPatologicos.update(
          {
            comentarios,
          },
          {
            where: {
              id: idPatologicos,
            },
          }
        );
      }
      res.status(200).json("Actualizado");
    } catch (err) {
      next(err);
    }
  }

  if (antecedentesNoPatologicos) {
    try {
      const patient = await Paciente.findByPk(idPaciente);
      const idNoPatologicos = patient.antecedentesPatologicoId;
      if (alimentacion) {
        await AntecedentesNoPatologicos.update(
          {
            alimentacion,
          },
          {
            where: {
              id: idNoPatologicos,
            },
          }
        );
      }
      if (higiene_corporal) {
        await AntecedentesNoPatologicos.update(
          {
            higiene_corporal,
          },
          {
            where: {
              id: idNoPatologicos,
            },
          }
        );
      }
      if (higiene_bucal) {
        await AntecedentesNoPatologicos.update(
          {
            higiene_bucal,
          },
          {
            where: {
              id: idNoPatologicos,
            },
          }
        );
      }
      if (vacunas) {
        await AntecedentesNoPatologicos.update(
          {
            vacunas,
          },
          {
            where: {
              id: idNoPatologicos,
            },
          }
        );
      }
      if (toxicomanias) {
        await AntecedentesNoPatologicos.update(
          {
            toxicomanias,
          },
          {
            where: {
              id: idNoPatologicos,
            },
          }
        );
      }
      if (alcoholismo !== null) {
        await AntecedentesNoPatologicos.update(
          {
            alcoholismo,
          },
          {
            where: {
              id: idNoPatologicos,
            },
          }
        );
      }
      if (tabaquismo !== null) {
        await AntecedentesNoPatologicos.update(
          {
            tabaquismo,
          },
          {
            where: {
              id: idNoPatologicos,
            },
          }
        );
      }
      if (tatuajes !== null) {
        await AntecedentesNoPatologicos.update(
          {
            tatuajes,
          },
          {
            where: {
              id: idNoPatologicos,
            },
          }
        );
      }
      if (comentarios) {
        await AntecedentesNoPatologicos.update(
          {
            comentarios,
          },
          {
            where: {
              id: idNoPatologicos,
            },
          }
        );
      }

      res.status(200).json("Actualizado");
    } catch (err) {
      next(err);
    }
  }
});

module.exports = router;
