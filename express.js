let express=require("express");
let router=require("./router.js");
let app=express();
app.use("/",router);//routerの使用
app.listen(3000);

module.export=app;
