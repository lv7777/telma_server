var request = require('supertest')
var app=require("./mochatest.js");


describe('/', function(){

  it('////', function(done){
    request(app).get("/").expect('Content-Type', /json/).end(200,done());
  })

})