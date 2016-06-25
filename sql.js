// const mysql=require("mysql");

// const takayamaDB={
//   port:"3306",
//   host:"172.18.93.188",
//   user:"IT",
//   password:"root",
//   database: 'telma'
// }

// const telma2={
//   port:"3306",
//   host:"localhost",
//   user:"root",
//   password:"root",
//   database: 'telma2'
// }

// const connection=mysql.createConnection(telma2);

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
  escape(data){
    console.log(data);
  },
  notfound(obj){
    //渡されたvalueが列内にあるかどうか。テーブルもひつよう。
  },
  storesession(user,pass,session){
    //user表にそいつが存在しているか確認。
    //確認できればsession表にuserとsessionを記録。
  }
};