const {Router} = require('express');
const axios = require('axios');
const router = Router();

router.post('/newUser', async(req, res, next) => {
    const {email, type, dni, name, lastname, phone, dateBirth, address, country, license, speciality }= req.body;

    console.log(email, type, dni, name, lastname, phone, dateBirth, address, country, license, speciality);

    if(type==="paciente"){
        try {
            const createdPatient = await Paciente.create({
                dni,
                name, 
                lastname, 
                phone, 
                dateBirth, 
                address, 
                country,
                email
            });
            return res.status(200).json(createdPatient)
        } catch (err) {
            console.log(err)
        }
    }
    else if(type==="profesional"){
        try {
            const createdProfesional =  await Profesional.create({
                license,
                name,
                lastname,
                speciality,
                email
            });
        } catch (err) {
            console.log(err)
            
        }
    }
    else{
        res.send("Need a type of user")
    }
})

router.get('/newUser', (req, res, next)=>{
    res.status(200).send('Get new')
})

module.exports = router;
