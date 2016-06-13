//import
const expressserver=require("./express.js");
const socketio=require("socketio");

const socket=socketio.listen(expressserver);
socket.on("connect",(app)=>{
   app.on("");
});

const obj={
  senddata(){
      
  }
};
//export
module.export=obj;