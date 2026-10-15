const express = require('express');
const bodyParser = require('body-parser');
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');
const expressHbs = require('express-handlebars');

const app = express();

app.engine('hbs', expressHbs.engine({ extname: 'hbs', defaultLayout: 'main-layout' }));
app.set('view engine', 'hbs');

app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.router);
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

app.use((req, res) => {
    // res.status(404).sendFile(path.join(__dirname,'views','404.html'))
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
})

app.listen(3000)