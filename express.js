const express=require("express");
const router=require("./router.js");
const app=express();
app.use("/",router);//routerの使用
app.listen(3000);

module.export=app;
