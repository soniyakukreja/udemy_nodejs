const http = require('http');
const routes = require('./routes');

const server = http.createServer((req,res)=>{

    if(req.url==="/"){
        res.setHeader('content-type','text/html');
        res.write('<html><head><title>Landing Page</title></head><body><h4>Welcome</h4><form method="post" action="/create-user"><input type="text" name="username" /><button type="submit">Submit</button></form></body></html>');
    }

    if(req.url==='/users'){
        routes.users(req,res);
    }


    if(req.url==='/create-user' && req.method==="POST"){
        routes.createUser(req,res);
    }
});
server.listen(5000);