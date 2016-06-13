const assert=require("assert");
const supertest=require("supertest");

const router=require("../router.js");

describe("GET /keiji",()=>{
    it("response is json and format is true",(done)=>{
        const data="";
        request(router).get(`/keiji${data}`).expect("Content-Type",/json/);
    });
});