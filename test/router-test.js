const assert=require("assert");
const request=require("supertest");

const router=require("../router.js");
const express=require("express");
let app=express();
app.use(router("tes"));
describe("GET /keiji",()=>{
    it("response is json and error if no request",(done)=>{
        const data="";
        request(app).get("/keiji").expect("Content-Type",/json/).expect(400,done);
    });
        it("掲示板はuseridと緯度、経度が必要 ",(done)=>{
        const data="?userid=XXXX&latitude=888&longitude=888";
        request(app).get("/keiji"+data).expect("Content-Type",/json/).expect(200,done);
    });
    
});

describe("POST /login",()=>{
    it("何も指定されていないとエラーを返す",(done)=>{
        const data="";
        request(app).post("/login").expect(400,done);
    });
    
    it("usernameとpasswordとemailが指定されていればおｋ",(done)=>{
       request(app).post("/login").send({
           username:"dammy",
           password:"dammy",
           email:"dammy"
       }).expect(400).expect(200,done);
    });
});