const {Router} = require('express');
const router = Router();
const {Especialidad,Profesional} = require('../db')

//Route for create treatments
router.get("/specialities", async(req, res, next) => {
    const {all}=req.query
    const {id}=req.query
    if(id){
        try{
            const especialidades=await Especialidad.findOne({
                where:{
                    id:id
                },
                include:{
                    model: Profesional
                }
            });
            res.status(200).json(especialidades)
        }
        catch(error){
            res.status(404).json(error)
        }
       
    }
    if(all==="all"){
        try{
            const especialidades=await Especialidad.findAll();
            res.status(200).json(especialidades)
        }
        catch(error){
            res.status(404).json({error})
        }
    }
    else{

        res.status(404)
    }

});


//Route for create specialities
router.post("/specialities", async (req, res, next)=>{
    const {speciality}=req.body
    console.log(speciality)
    try{
        const especialidad=await Especialidad.create(
            {
                nombre:speciality
            }
        );
        res.status(200).json(especialidad)
    }
    catch(error){
        res.status(404).json(error)
    }
    

})

module.exports = router;