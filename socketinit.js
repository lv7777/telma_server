let socketio=require("socket.io")
module.exports=function(appinstance){
let socket=socketio.listen(appinstance);

socket.sockets.on("connection",function(socketin){
    socketin.on("sendevent",function(data){
        console.log("get sendevent\n")
        console.log(data)
    })
    console.log("connect");
});

return socket;
}