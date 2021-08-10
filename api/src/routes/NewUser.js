const {Router} = require('express');
const axios = require('axios');
const router = Router();

router.post('/newUser', (req, res, next) => {
    res.status(200).send('llegue a new');
})

module.exports = router;
