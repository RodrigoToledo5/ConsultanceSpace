const { Router } = require('express');
const { Op } = require('sequelize');
const { Profesional,Especialidad } = require('../db');
const router = Router();

router.get('/profesional', async (req, res, next) => {
    const { fullName, email, speciality } = req.query;

    if (fullName) {

        try {
            let profesional = fullName ? await Profesional.findAll() : null;

            if (profesional) {
                let profesionalFilterByFullName = profesional;
                profesionalFilterByFullName = profesional.filter((profesional) => {
                    if (profesional.fullName.includes(fullName.toUpperCase())) return profesional.fullName
                    return profesional.fullName === fullName.toUpperCase()
                })
                if (profesionalFilterByFullName.length) {
                    res.status(200).json(profesionalFilterByFullName)
                }
                else {
                    let profesionals = await Profesional.findAll(
                        {
                            
                            include:{model: Especialidad}
                        }
                    )
                    profesionals=profesionals.filter((profesional)=>{//Buscamos profesional por especialidad ahora no hace falta que escriba toda la especialidad
                        if(profesional.especialidads.find(
                            (especialidad)=>especialidad.nombre.includes(
                                speciality[0].toUpperCase()+speciality.substring(1,speciality.length).toLowerCase()
                                )
                            )
                        )return true;
                        else return false
                    })
                    res.status(200).json(profesionals)
                }
            }

            // if (speciality) {

            //     try {
            //         let profesional = speciality ? await Profesional.findAll(
            //             {
            //                 where: {
            //                     especialidad: speciality,
            //                 }
            //             }
            //         ) : null;
            //         if (profesional.dataValue) res.status(200).send("user not found")
            //         else {
            //             //console.log(profesional[0].dataValues)
            //             // var profesionalbyspeciality = profesional[0].dataValues
            //             const profesionalbyspeciality = profesional.map((dataValue) => {
            //                 return (dataValue.dataValues)
            //             })
            //             console.log(profesionalbyspeciality)
            //             res.status(200).json(profesionalbyspeciality)
            //         }
            //     } catch (err) {
            //         console.log(err)
            //     }
            // }


            if (profesional === null) res.status(200).send(`{user not found}`)
        } catch (err) {
            next(err)
        }
    }

    else if (email) {
        try {
            const profesional = email ? await Profesional.findAll(
                {
                    where: {
                        usuarioEmail: email,
                    },
                    include:{model:Especialidad}
                }
            ) : res.status(404).send("profesional not found");
            if (profesional === null) res.status(200).send("user not found")
            else {
                res.status(200).json(profesional)
            }
        } catch (err) {
            next(err)
        }
    }


})

module.exports = router;