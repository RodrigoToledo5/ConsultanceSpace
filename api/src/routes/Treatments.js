const {Router} = require('express');
const router = Router();
const {Tratamientos, Cita} = require('../db')

//Route for create treatments
router.post("/treatments", async(req, res, next) => {
    try {
    const {treatmentName, description, price, payment_method, status, citumId} = req.body
    console.log(treatmentName, description, price, payment_method, status, citumId)
        const treatment = await Tratamientos.create({
                treatmentName,
                description,
                price,
                payment_method,
                status       
        });
        await treatment.setCitum(citumId);
        return treatment ? res.send("Agregado con éxito") : res.send("No se pudo agregar");
    } catch (err) {
        next(err);
    }
});


//Route for get tratments by citumId and name
router.get("/treatments", async (req, res, next)=>{
    try {
        const {citumId}= req.query;
        const treatment = await Tratamientos.findOne({
            where:{
                citumId,
            },
             include: Cita
        })
        
        return treatment ? res.json(treatment) : res.send("No se encontró registro");
        
    } catch (err) {
        next(err)  
    }
  res.sendStatus(200);
});

//All tratments
router.get("/treatmentsAll", async (req, res, next)=>{
    try {
        const treatment = await Tratamientos.findAll()
        
        return treatment ? res.json(treatment) : res.send("No se encontró registro");
        
    } catch (err) {
        next(err)  
    }
  res.sendStatus(200);
});


//ROUTE FOR UPDATE STATUS OF TREATMENTS PAYMENT, SEND: APPOINTMENT ID AND UPDATED STATUS 
router.put("/treatments", async (req, res) => {
 const {citumId, status} = req.body;
    if(status!==null){
        try {
            await Tratamientos.update(
                {
                    status,
                  },
                  {
                    where: {
                        citumId
                    },
                  }
            );
        res.status(200).json("Actualizado");
            
        } catch (err) {
           next(err) 
        }}    
})

module.exports = router;