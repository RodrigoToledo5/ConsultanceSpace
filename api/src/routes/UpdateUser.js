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
router.post("/updateUser", async (req, res, next) => {
  const {
    email,//pedimos el email
    type,
    dni,
    name,
    lastName,
    phone,
    birth,
    address,
    country,
  } = req.body;
  try{
    user=await Usuario.findByPk(email);
    if(user.tipo_usuario==="profesional"){
      await Profesional.update({
        cedula
      })
    }
  }
 catch(error){
   
 }
  
  
});

//ROUTE TO BRING THE SPECIALTIES

module.exports = router;
