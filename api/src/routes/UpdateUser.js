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
router.put("/updateUser", async (req, res, next) => {
  const {
    email,//pedimos el email
    id,//id
    dni,
    name,
    lastName,
    phone,
    birth,
    address,
    country,
  } = req.body;

  console.log(name)
  console.log(email)
  try{
    const user=await Usuario.findByPk(email);
    if(user.tipo_usuario==="profesional"){
      if(name&&typeof name ==="string"){
        await Profesional.update({
          nombre:name
        },{where:{
          id:id,
        }});
      }
      if(lastName&&typeof lastName ==="string"){
        await Profesional.update({
          apellidos:lastName,
        },{where:{
          id:id,
        }});
      }
      if(dni&&typeof dni ==="number"){
        await Profesional.update({
          cedula:dni,
        },{where:{
          id:id,
        }});
      }
      if(birth&&bird instanceof Date){
        await Profesional.update({
          fecha_de_nacimiento:birth,
        },{where:{
          id:id,
        }});
      }
      if(address&&typeof address ==="string"){
        await Profesional.update({
          direccion:address,
        },{where:{
          id:id,
        }});
      }
      if(phone&&typeof phone ==="number"){
        await Profesional.update({
          telefono:phone,
        },{where:{
          id:id,
        }});
      }
      if(country&&typeof country ==="string"){
        await Profesional.update({
          pais:country,
        },{where:{
          id:id,
        }});
      }
      const profesional=await Profesional.findByPk(id);
      res.status(200).json(profesional)
    }
    if(user.tipo_usuario==="paciente"){
      if(name&&typeof name ==="string"){
        await Profesional.update({
          nombre:name
        },{where:{
          id:id,
        }});
      }
      if(lastName&&typeof lastName ==="string"){
        await Profesional.update({
          apellidos:lastName,
        },{where:{
          id:id,
        }});
      }
      if(dni&&typeof dni ==="number"){
        await Profesional.update({
          cedula:dni,
        },{where:{
          id:id,
        }});
      }
      if(birth&&bird instanceof Date){
        await Profesional.update({
          fecha_de_nacimiento:birth,
        },{where:{
          id:id,
        }});
      }
      if(address&&typeof address ==="string"){
        await Profesional.update({
          direccion:address,
        },{where:{
          id:id,
        }});
      }
      if(phone&&typeof phone ==="number"){
        await Profesional.update({
          telefono:phone,
        },{where:{
          id:id,
        }});
      }
      if(country&&typeof country ==="string"){
        await Profesional.update({
          pais:country,
        },{where:{
          id:id,
        }});
      }
      const profesional=await Profesional.findByPk(id);
      res.status(200).json(profesional)
    }
  }
 catch(error){
   res.status(404).json(error)
 }
});

//ROUTE TO BRING THE SPECIALTIES
       
module.exports = router;
