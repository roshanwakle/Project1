var express=require('express');

var app=express();

var fs=require("fs");

app.get('/listUsers',function(req,res)
{
    fs.readFile('users.json',function(err,data)
    {
        console.log(data);
        res.end(data)
    })
})


app.get('/:id',function(req,res)
{
    fs.readFile("user.json",function(err,data)
    {
        var users=JSON.parse(data);
        var user=users['user'+req.params.id]
        console.log(user)
        res.end(JSON.stringify(user))
    })
})

var server =app.listen(8081,function()
{
    var host=server.address().address
    var port =server.address().port
    console.log("server is running.....",host,port)
})