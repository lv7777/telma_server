const express=require("express");
const router=require("./router.js");
const socketinit=require("./socketinit.js");
const app=express();
app.use(router(socketinit(app.listen(3000) )));//routerの使用
