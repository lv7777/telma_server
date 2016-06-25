const express = require("express");

//sql.jsがいる。
// //socketioがいる。

module.exports = function (socket) {
    const router = express.Router();
   
    //ルーティング設定
router.get('/se', function(req, res) {
  var session = req.session;
  if (session && session.count) {
    session.count++;
  } else {
    session.count = 1;
  }
  res.send('count is ' + session.count)
});
 
    return router;
};
