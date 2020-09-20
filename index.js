const express =require("express");
const bodyParser= require("body-parser");

var app= express();

app.use(bodyParser.urlencoded({extended :true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});
app.post('/',function(req,res){
var name =  req.body.id;
res.send(name);
console.log(req.body);
})


app.listen(process.env.PORT||3000,function () {
    console.log('====================================');
    console.log("Server started....");
    console.log('====================================');
});