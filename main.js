var express=require("express");
var bodyParser = require('body-parser');
var app=express();

app.use(bodyParser());
app.use(express.static("/"));

app.get("/",(req,res)=>{
    console.log("kita")
    res.sendFile(__dirname+"/index.html");
})

app.post("/",(req,res)=>{
    console.log("posted")
    console.log(req.body)
    res.sendFile(__dirname+"/index.html");
})



app.listen(process.env.PORT || 3000 ,function(){
    console.log("start"+this.address().port)
});