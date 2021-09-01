const { Router } = require("express");
const router = Router();

//routes
router.use(require("./NewUser"));
router.use(require("./Stock"));
router.use(require("./Login"));
router.use(require("./cita"));
router.use(require("./Info"));
router.use(require("./SearchProfesional"));
router.use(require("./Patients"));
router.use(require("./Treatments"))
router.use(require("./UpdateUser"))
router.use(require("./Profesional_patient"))
router.use(require("./Specialities"))
router.use(require("./checkout"))
router.use(require("./Mailing"))
router.use(require("./ProfesionalToken"))
router.use(require("./Profesionalpayments"))
router.use(require("./DisablePatients"))
router.use(require("./horarios"))
router.use(require("./AddPatients"));
router.use(require("./MedicalRecord"));


module.exports = router;
