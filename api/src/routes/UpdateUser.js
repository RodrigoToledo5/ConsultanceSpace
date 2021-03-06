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
    speciality,
    clearespeciality,
    genero,
    estado_civil
  } = req.body;
  //console.log("el body es ",req.body,"y la direccion es", typeof address);
  //fecha=(birth.substring(0,birth.length-14))
  //console.log(speciality)
  try{
    const user=await Usuario.findByPk(email);
    
    if(user.tipo_usuario==="profesional"){
      if(clearespeciality==="true"){
        console.log("paso")
        await Profesional.update({
          especialidad:'',
        },{where:{
          id:id,
        }});
      }
      if(speciality){
        //console.log("paso ")
        var profe=await Profesional.findByPk(id);
       
        const espec=await Especialidad.findOne({ where: {nombre: speciality } })
        espec.addProfesional(id)
        //deprecated
        // if(profe.especialidad){
        //   await Profesional.update({
        //     especialidad:profe.especialidad+' '+speciality,
        //   },{where:{
        //     id:id,
        //   }});
        // }
        // else{
        //   await Profesional.update({
        //     especialidad:speciality,
        //   },{where:{
        //     id:id,
        //   }});
        // }
        
      }
      if(name&&typeof name ==="string"){
        await Profesional.update({
          nombre:name.toUpperCase()
        },{where:{
          id:id,
        }});
      }
      if(lastName&&typeof lastName ==="string"){
        await Profesional.update({
          apellidos:lastName.toUpperCase(),
        },{where:{
          id:id,
        }});
      }
      if(dni){
        await Profesional.update({
          cedula:dni,
        },{where:{
          id:id,
        }});
      }
      if(birth){
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
      if(phone){
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

        console.log(user.tipo_usuario)
        await Paciente.update({
          nombre:name.toUpperCase()
        },{where:{
          id:id,
        }});
      }
      if(lastName && typeof lastName === "string"){
        await Paciente.update({
          apellidos:lastName.toUpperCase(),
        },{where:{
          id:id,
        }});
      }
      if(dni){
        await Paciente.update({
          cedula:dni,
        },{where:{
          id:id,
        }});
      }
      if(birth){
        await Paciente.update({
          fecha_de_nacimiento:birth,
        },{where:{
          id:id,
        }});
      }
      if(address){
        await Paciente.update({
          direccion:address,
        },{where:{
          id:id,
        }});
      }
      if(phone){
        await Paciente.update({
          telefono:phone,
        },{where:{
          id:id,
        }});
      }
      if(country){
        await Paciente.update({
          pais:country,
        },{where:{
          id:id,
        }});
      }
      if(genero){
      
        await Paciente.update({
          genero:genero,
        },{where:{
          id:id,
        }});
      }
      if(estado_civil){
        
        await Paciente.update({
          estado_civil:estado_civil,
        },{where:{
          id:id,
        }});
      }
      const paciente=await Paciente.findByPk(id);
      res.status(200).json(paciente)
    }
  }
 catch(error){
   res.status(404).json(error)
 }
});

//ROUTE TO BRING THE SPECIALTIES
       
module.exports = router;
