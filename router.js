//const sql = require("./sql.js");
const express = require("express");
//sql.jsがいる。
// //socketioがいる。

module.exports = function (socket) {
    const router = express.Router();

    // router.post('/login', function (req, res) {
    //     console.log("/login");
    //     sql.query(sql.escape(req.body.email, req.body.password), function (rows, fields) {
    //         res.send();
    //     });
    // });

    // router.post('/options', function (req, res) {
    //     sql.query(sql.escape(), function () {

    //     });
    // });


    // //autoincliment,selial(useridの連番を作るとき)
    // router.post('/register', function (req, res) {
    //     console.log("/register");
    //     sql.query(sql.escape(req.username, req.password, req.tel, req.email), function (rows, field) {

    //     });

    // });


    // router.get('/keiji', function (req, res) {
    //     console.log("/keiji");
    //     res.send({
    //         fa: "fff"
    //     })
    //     // sql.query(sql.escape(req.query.userid,req.query.region),function(){

    //     // });
    //     //リスト一覧。
    //     //   console.log(req.user);
    //     //  res.render('s1');
    // });

    // router.post('/keiji/post', function (req, res) {
    //     console.log("keiji/post");
    //     sql.connect(sql.escape(req.body.content, req.body.title, req.body.userid), function (row, field) {

    //     });
    //     //   console.log(req.user);
    //     //  res.render('s1');
    // });

    // router.get('/keiji/deteal', function (req, res) {
    //     console.log("/keiji/deteal");
    //     sql.connect(sql.escape(), function (row, field) {

    //     });
    //     //`
    // });

    // router.get('/kasikari', function (req, res) {
    //     console.log("/kasikari");
    //     sql.connect(sql.escape(req.query.userid), function (row, field) {

    //     });
    //     //   console.log(req.user);
    //     //  res.render('s1');
    // });

    // router.post('/kasikari/post', function (req, res) {
    //     console.log("/kasikari/post");
    //     sql.connect(sql.escape(req.body.content, req.body.title, req.body.userid), function (row, field) {

    //     });
    //     //   console.log(req.user);
    //     //  res.render('s1');
    // });

    // router.get('/kasikari/deteal', function (req, res) {
    //     console.log("/kasikari/deteal");
    //     sql.connect(sql.escape(req.query.detealid), function (row, field) {

    //     });
    //     //   console.log(req.user);
    //     //  res.render('s1');
    // });

    //socketioを使う。
    router.get('/chat', function (req, res) {
        console.log("/chat");

    });
    return router;
};