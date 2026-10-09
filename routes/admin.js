const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');

router.get("/add-products",(req,res,next)=>{
    const filePath = path.join(rootDir,'views','add-product.html');
    res.sendFile(filePath)
})


router.post("/add-products",(req,res,next)=>{
    console.log("add product form get route");
    const filePath = path.join(__dirname,'../','views/add-product.html');
    res.send(filePath)
})

module.exports = router;