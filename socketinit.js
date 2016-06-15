const socketio=require("socket.io");
module.exports=function(appinstance){
const socket=socketio.listen(appinstance);

socket.sockets.on("connection",function(socketin){
    socketin.on("client2server",function(data){
        console.log("client2server\n");
        console.log(data);
    });
    console.log("connect");
});

return socket;
};