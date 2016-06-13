const socketio=require("socket.io");
module.exports=function(appinstance){
const socket=socketio.listen(appinstance);

socket.sockets.on("connection",function(socketin){
    socketin.on("sendevent",function(data){
        console.log("get sendevent\n");
        console.log(data);
    });
    console.log("connect");
});

return socket;
};