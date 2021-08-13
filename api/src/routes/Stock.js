const {Router} = require('express');
const axios = require('axios');
const {Stock} = require('../db');
const router = Router();

//Route for set and get Proff Stock

router.get('/stock', async(req, res, next)=>{
    const { email } = req.query;
    const stock = email? await Stock.findOne({ where: { usuarioEmail: email } }) : null;
    
if (stock === null ) {
    res.status(200).json("not found")
} else {
    let forSend = [];
    stock.itemsName.forEach((e,i) => {
        let obj = {};
        obj[e] = stock.itemsCount[i];
        forSend.push(obj);
    });
    res.status(200).json(forSend)
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
            let forDb = [];
            forDb = [...stock.itemsCount];
            forDb[index] = quantity;
            stock.itemsCount = [...forDb];
        }
    }else{
        stock.itemsName = [item];
        stock.itemsCount = [quantity];
    }
    let forSend = [];
    stock.itemsName.forEach((e,i) => {
        let obj = {};
        obj[e] = stock.itemsCount[i];
        forSend.push(obj);
    });
    await stock.save();
    res.status(200).json(forSend);
}

})

router.delete('/stock', async(req, res, next)=>{
    const { email, item } = req.body;
    const stock = email? await Stock.findOne({ where: { usuarioEmail: email } }) : null;
    
if (stock === null || item === null ) {
    res.status(200).json("not found")
} else {
    if(stock.itemsName){
        const index = stock.itemsName.indexOf(item);
        if(index !== -1){
            let forDbItemsCount = [...stock.itemsCount];
            let forDbItemsName = [...stock.itemsName];
            forDbItemsName.splice(index,1);
            forDbItemsCount.splice(index,1);
            stock.itemsCount = [...forDbItemsCount];
            stock.itemsName = [...forDbItemsName];
        } 
    }
    let forSend = [];
    stock.itemsName.forEach((e,i) => {
        let obj = {};
        obj[e] = stock.itemsCount[i];
        forSend.push(obj);
    });
    await stock.save();
    res.status(200).json(forSend);
}

})

module.exports = router;