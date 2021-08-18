const { Router } = require("express");
const router = Router();

//routes
router.use(require("./NewUser"));
router.use(require("./Stock"));
router.use(require("./Login"));
router.use(require("./SearchProfesional"));

module.exports = router;
