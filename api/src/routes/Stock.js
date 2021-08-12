const {Router} = require('express');
const axios = require('axios');
const {Stock} = require('../db');
const router = Router();

//Route for set and get Proff Stock

router.get('/stock', async(req, res, next)=>{
    const { email } = req.body;
    const stock = email? await Stock.findOne({ where: { usuarioEmail: email } }) : null;
    
if (stock === null ) {
    res.status(200).json("not found")
} else {
    res.status(200).json({"items":stock.itemsName, "quantity": stock.itemsCount})
}})
    
router.post('/stock', async(req, res, next)=>{
    const { email, item, quantity  } = req.body;
    const stock = email? await Stock.findOne({ where: { usuarioEmail: email } }) : null;
    
if (stock === null || item === null || quantity === null ) {
    res.status(200).json("not found")
} else {
    if(stock.itemsName){
        const index = stock.itemsName.indexOf(item);
        if(index === -1){
            stock.itemsName = [...stock.itemsName, item];
            stock.itemsCount = [...stock.itemsCount, quantity];
        } else {
            stock.itemsCount[index] = quantity;
        }
    }else{
        stock.itemsName = [item];
        stock.itemsCount = [quantity];
    }
    await stock.save();
    res.status(200).json(stock);
}

})

module.exports = router;