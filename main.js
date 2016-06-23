var express=require("express");

var app=express();

app.use(express.static("/"));

app.get("/",(req,res)=>{
    console.log("kita")
    res.sendFile("index.html");
})

app.listen(3000);