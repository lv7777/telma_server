const express=require("express");
const session=require("express-session");
const router=require("./router.js");
const socketinit=require("./socketinit.js");
var bodyParser = require('body-parser');
const app=express();
// app.use(session({
//     secret:"test",
//     cookie:{secure:true}
// }));

    app.use(session({
      secret : 'secretKey'
    }));

app.use(bodyParser());
app.use(express.static("./test/"))
app.use(router(socketinit(app.listen( process.env.PORT || 3000 ,function(){
    "start"+this.address().port;
}) )));//routerの使用