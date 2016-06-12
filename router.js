app.post('/login',function(req,res){
    console.log("/login");
    connection.query(querysanitizing(req.body.email,req.body.password),function(rows,fields){
        
        res.send();
    });
});

app.post('/options',function(req,res){
    connection.query(querysanitizing(),function(){
        
    });
});


//autoincliment,selial(useridの連番を作るとき)
app.post('/register',function(req,res){
    console.log("/register");
    connection.query(querysanitizing(req.username,req.password,req.tel,req.email),function(rows,field){
        
    })
    
});


app.get('/keiji',function(req,res){
    console.log("/keiji");
    connection.query(querysanitizing(req.query.userid,req.query.region),function(){
        
    });
    //リスト一覧。
 //   console.log(req.user);
  //  res.render('s1');
});

app.post('/keiji/post',function(req,res){
    console.log("keiji/post");
    connection.connect(querysanitizing(req.body.content,req.body.title,req.body.userid),function(row,field){
        
    });
 //   console.log(req.user);
  //  res.render('s1');
});

app.get('/keiji/deteal',function(req,res){
    console.log("/keiji/deteal");
    connection.connect(querysanitizing(),function(row,field){
        
    });
    //`
});

app.get('/kasikari',function(req,res){
    console.log("/kasikari");
    connection.connect(querysanitizing(req.query.userid),function(row,field){
        
    })
 //   console.log(req.user);
  //  res.render('s1');
});

app.post('/kasikari/post',function(req,res){
    console.log("/kasikari/post");
    connection.connect(querysanitizing(req.body.content,req.body.title,req.body.userid),function(row,field){
        
    });
 //   console.log(req.user);
  //  res.render('s1');
});

app.get('/kasikari/deteal',function(req,res){
    console.log("/kasikari/deteal");
    connection.connect(querysanitizing(req.query.detealid),function(row,field){
        
    });
 //   console.log(req.user);
  //  res.render('s1');
});

//socketioを使う。
app.post('/chat',function(req,res){
    console.log("/chat");
    
});
