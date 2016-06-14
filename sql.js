// const mysql=require("mysql");

// const takayamaDB={
//   host:"",
//   user:"IT",
//   password:"root"
// }

// const connection=mysql.createConnection(takayamaDB);

// //connection.escape()
// connection.connect(function(err) {
//   if (err) {
//     console.error(`error connecting ${err.stack}`);
//     return;
//   }

//   console.log(`connected as id ${connection.threadId}`);
// });

// module.exports=connection;

module.exports={
  query(q,cb){
    cb(q)
  },
  escape(...data){
    console.log(data);
  }
};