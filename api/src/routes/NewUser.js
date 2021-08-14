const {Router} = require('express');
const axios = require('axios');
const {Paciente, Usuario, Profesional, Especialidad} = require('../db');
const router = Router();

//ROUTE TO CREATE PATIENTS AND PROFESSIONALS
router.post('/newUser', async(req, res, next) => {
    
    const {type, dni, name, lastName, phone, birth, address, country, cedula, especialidad, id_Historia_Clinica, email } = req.body
    console.log(type, dni, name, lastName, phone, birth, address, country, cedula, especialidad, id_Historia_Clinica, email);
    try{
        await Usuario.create({
            email,
            tipo_usuario: type
        })
    }catch(err){
        next(err);
    }

    if(type==="paciente"){
        try {
            const createdPatient = await Paciente.create({
                DNI: dni,
                nombre: name,
                apellidos: lastName,
                telefono: phone,
                fecha_de_nacimiento: birth,
                direccion: address,
                pais:country
            });
            await createdPatient.setUsuario(email);
            return res.status(200).send('Registro exitoso')
        } catch (err) {
            next(err);
        }
    }
    else if(type==="profesional"){
        try {
            let allSpecialty = especialidad.map(esp => {
                return Especialidad.findOrCreate({
                    where:{
                        nombre: esp
                    }
                })
            })
            let relSpecialties = await Promise.all(allSpecialty);
            const createdProfesional =  await Profesional.create({
                cedula,
                nombre: name,
                apellidos: lastName,
                telefono: phone,
                direccion: address               
            });
            await createdProfesional.setUsuario(email);
            relSpecialties.forEach(esp => createdProfesional.setEspecialidads(esp[0]));
            return res.status(200).json(createdProfesional)
        } catch (err) {
            next(err);            
        }
    }
    else{
        res.send("Need a type of user")
    }
})

//ROUTE TO BRING THE SPECIALTIES

router.get('/specialtys', async(req, res, next)=>{
    const specialties = await Especialidad.findAll();
    res.status(200).json(specialties)
})

module.exports = router;
