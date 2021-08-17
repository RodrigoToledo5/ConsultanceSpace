const { Router ,json} = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// const countries = require("./Countries")
// const activity = require('./Activity');



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
 //router.use('/Countries', countries);
 //router.use('/Activity', activity);


router.use(require('./NewUser'));
router.use(require('./Stock'));
router.use(require('./Login'));

// router.use("/countries",countries);//aca puedo pasar midlewares
// router.use("/activity",activity);


module.exports = router;
