const {Router} = require('express');
const router = Router();
const {Tratamientos} = require('../db')


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

router.get("/treatments", async(req, res, next)=>{
  res.sendStatus(200);

})

module.exports = router;