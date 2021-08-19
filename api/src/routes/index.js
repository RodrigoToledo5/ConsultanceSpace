const { Router } = require("express");
const router = Router();

//routes
router.use(require("./NewUser"));
router.use(require("./Stock"));
router.use(require("./Login"));
router.use(require("./Cita"));

module.exports = router;
