const fs = require('fs');

const createUser  = (req,res)=>{
    const body=[];
    req.on('data',(chunk)=>{
        body.push(chunk)
    })

    req.on('end',()=>{
        const parsedBody = Buffer.concat(body).toString();
        console.log(parsedBody);
        res.setHeader('location','/users');
        res.statusCode = 302
        return res.end();
    })
}

const userList = (req,res)=>{
    res.setHeader('Content-type','text/html');
    res.write('<html><head><title>User List</title></head><body><h4>User List</h4><ul><li>User 1</li><li>User 2</li><li>User 3</li><li>User 4</li></ul></body></html>');

    res.end();
}

module.exports = {
    createUser:createUser,
    users:userList
};

// exports.users = userList;



