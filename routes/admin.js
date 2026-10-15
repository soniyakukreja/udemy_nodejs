const express = require('express');
const router = express.Router();
const products = [];

router.get("/add-products",(req,res,next)=>{
    res.render('add-product',{title:'Add-Product',path:'/admin/add-products'});
})


router.post("/add-products",(req,res,next)=>{
    products.push({title:req.body.title})
    res.redirect('/')
})

exports.router = router;
exports.products = products;

