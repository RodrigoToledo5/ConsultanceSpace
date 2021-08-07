const express = require('express');
const router = express.Router();
const {Op} = require('sequelize');
//hay que importar los models que se van a usar en la ruta

router.post('/', async (req, res)=>{
  res.status(200).send("");
});

module.exports = router;