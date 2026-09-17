const express = require('express');
const http = require('http');
// const routes = require('./routes');


const app = express();

app.use('/',(req,res,next)=>{
    console.log("always run the middleware");
    next();
})

app.use('/',(req,res,next)=>{
    console.log("always run the middleware 2");
    next();
})

app.use('/users',(req,res)=>{
    res.send("<h2>Hello Users </h2>")
})

app.use('/',(req,res)=>{
    res.send("<h2>Hello from express js </h2>")
})


const server = http.createServer(app);
server.listen(5000);