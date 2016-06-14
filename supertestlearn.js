//const sql = require("./sql.js");
const express = require("express");
//sql.jsがいる。
// //socketioがいる。

module.exports = function (socket) {
    const router = express.Router();
    router.get('/user', function(req, res){
  res.status(200).json({ name: 'tobi' });
});
    //socketioを使う。
    // router.get('/chat', function (req, res) {
    //     console.log("/chat");
    //     res.status(200).send({
    //         eee:"fff"
    //     });
    // });
    return router;
};