const express=require("express");
const router=require("./router.js");
const socketinit=require("./socketinit.js");
const app=express();
var bodyParser = require('body-parser');
app.use(bodyParser());
app.use(express.static("./test/"))
app.use(router(socketinit(app.listen( process.env.PORT || 3000 ,function(){
    "start"+this.address().port;
}) )));//routerの使用