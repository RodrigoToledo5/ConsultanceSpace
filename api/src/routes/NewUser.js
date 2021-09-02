const { Router } = require("express");
const nodemailer = require("nodemailer");
const { GMAIL, GMAIL_PASS } = process.env;
// SDK de Mercado Pago
const mercadopago = require ('mercadopago');

// Agrega credenciales
mercadopago.configure({
  access_token: 'TEST-5695753117844767-081805-11b8ffc1f4b6a57bfef5f89391084f62-249576982'
});

const {
  Paciente,
  Usuario,
  Profesional,
  Especialidad,
  Stock,
  Horario
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
      return res.status(200).send("Registro exitoso");
    } catch (err) {
      next(err);
    }
  } else if (type === "profesional") {
    try {

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

      //create horario and rel with professional
      const horario = await Horario.create({
      });
      await horario.setProfesional(createdProfesional.id);

      //create stock and rel with professional
      const emptyArr = [];
      const stock = await Stock.create({
        emptyArr,
        emptyArr,
      });
      await stock.setUsuario(email);


       //empieza,cuando un profesional se suscribe a la plataforma se le manda un correo
        console.log("back_urls")
        const price = 1000
      // Crea un objeto de preferencia
      let preference = {
        items: [
        {
            title: req.body.title,
            unit_price: parseInt(price),
            quantity: 1,
        },
        ],
        /* "purpose": 'wallet_purchase', */
        "back_urls": {
            "success": "http://localhost:3000/succes",
            "failure": "http://localhost:3000/failure",
            "pending": "http://localhost:3000/pending"
        },
        "auto_return": "approved",
        
      };
      
      console.log("el preference es", preference);
      var transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        service: 'gmail',
        auth: {
          user: "consultance.space@gmail.com",
          pass: "passwordSpace",
        },
      });
      // let transporter = nodemailer.createTransport({
      //   host: "smtp.ethereal.email",
      //   port: 587,
      //   secure: false, // true for 465, false for other ports
      //   auth: {
      //     user: testAccount.user, // generated ethereal user
      //     pass: testAccount.pass, // generated ethereal password
      //   },
      // });
      console.log("el email del ususario es", email);
      const response = await mercadopago.preferences.create(preference);
      console.log("paso el response");
      transporter.sendMail({
        from: GMAIL,
        to: email,
        subject: 'Pago de la suscripcion',
        text: 'Paga la suscripcion por favor ' + response.body.init_point,
      },function(error,info){
        if(error){
          console.log("hubo un error")
        }else{
          console.log("la info que llego es", info);
        }
      })
      
      //console.log(response.body)
      //res.redirect(response.body.init_point)

      return res.status(200).json(createdProfesional);
      
      //termina
      
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
