const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');

const products = [];

router.get("/add-products",(req,res,next)=>{
    // const filePath = path.join(__dirname,'../','views','add-product.html');
    // const filePath = path.join(rootDir,'views','add-product.html');
    // res.sendFile(filePath)
    res.render('add-product',{title:'Add-Product',path:'/admin/add-products'});
})


router.post("/add-products",(req,res,next)=>{
    // console.log(req.body);
    products.push({title:req.body.title})
    res.redirect('/')
    // const filePath = path.join(__dirname,'../','views/add-product.html');
    // res.send(filePath)
})

exports.router = router;
exports.products = products;

