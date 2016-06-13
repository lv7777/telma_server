// const mysql=require("mysql");

// const connection=mysql.createConnection({
//     host:"host",
//     user:"user",
//     password:"password"
// });
// //connection.escape()
// connection.connect(function(err) {
//   if (err) {
//     console.error(`error connecting ${err.stack}`);
//     return;
//   }

//   console.log(`connected as id ${connection.threadId}`);
// });

//module.exports=connection;

module.exports={
  query(...data){
    console.log(data);
  },
  escape(...data){
    console.log(data);
  }
};