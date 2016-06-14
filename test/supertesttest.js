// const assert = require("assert");
// const request = require("supertest");
// const express=require("express")
// const router = require("../supertestlearn.js");
// let app=express()
// app.use(router("tes"));
// app.listen(3000);
// describe("GET /chat", () => {
//     it("response is json and format is true", (done) => {
//         const data = "";
//         //   request(router).get("/chat").expect(200,done);


//         request(app)
//             .get('/user')
//             .expect('Content-Type', /json/)
//             .expect('Content-Length', '15')
//             .expect(200)
//             .end(function (err, res) {
//                 if (err) throw err;
//             });
//     });
// });
const router = require("../supertestlearn.js");
const assert = require("assert");
var request = require('supertest')
    , express = require('express');

var app = express();
app.use(router("tes"));
// app.get('/fefef', function (req, res) {
//     res.status(400).json({ name: 'tobi' });
// });


describe("GET /user", () => {
    it("response is json and format is true", (done) => {
        request(app)
            .get('/user')
            .expect('Content-Type', /json/)
            .expect('Content-Length', '15')
            .expect(200)
            .expect(200,done);

    })
});