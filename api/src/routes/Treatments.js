const {Router} = require('express');
const router = Router();
const {Tratamientos} = require('../db')

//Route for create treatments
router.post("/treatments", async(req, res, next) => {
    try {
    const {treatmentName, description, price, citumId} = req.body
        const treatment = await Tratamientos.create({
                treatmentName,
                description,
                price,       
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
        const {id}= req.query;
        const treatment = await Tratamientos.findByPk(id)
        return treatment ? res.json(treatment) : res.send("No se encontró registro");
        
    } catch (err) {
        next(err)  
    }
  res.sendStatus(200);

})

module.exports = router;