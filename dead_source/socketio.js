//import
//let expressserver=require("./express.js");DI(依存性注入)
const socketio=require("socket.io");

module.exports = function (exporessserver) {
  const socket = socketio.listen(expressserver);
  socket.sockets.on("connect", (app) => {
    console.log("connection started");
    app.on("chat_from_client", data => {
      socket.sokets.emit("chat_from_server", {
        value: data
      });
    });
  });

}
