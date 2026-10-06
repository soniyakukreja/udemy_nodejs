const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({extended: false }));

app.use('/admin',adminRoutes);
app.use(shopRoutes);
// app.get('/products',(req,res,next)=>{
//     console.log("abc")
//     console.log(req.body)
//     res.send("Producs page from app")
// })


// app.post('products',(req,res,next)=>{
//     console.log(req.body)
// })

// app.use('/',(req,res)=>{
//     res.send("<h3>Welcom Page</h3>")
// })

app.use((req,res)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

app.listen(3000)