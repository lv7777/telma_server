var express = require('express')
var parseurl = require('parseurl')
var session = require('express-session')

var app = express()


//secretはhash化するための値
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

//絶対通る。
app.use(function (req, res, next) {
  var views = req.session.views
console.log("ok")
  if (!views) {
    views = req.session.views = {}
  }
  //req.session.*のキーはなんでもいいからとりあえず自分はsessionIDとかでいいんじゃない？

  // get the url pathname
  var pathname = parseurl(req).pathname

  // count the views
  views[pathname] = (views[pathname] || 0) + 1
//当たり前だけどここに入ってる値とcookieに入ってる値はちがうからな？クッキーに入ってる方は多分hash後


  next()
})

app.get('/foo', function (req, res, next) {
    console.log("ID "+req.sessionID)
  res.send('you viewed this page ' + req.session.views['/foo'] + ' times')
})

app.get('/bar', function (req, res, next) {
  res.send('you viewed this page ' + req.session.views['/bar'] + ' times')
})
app.listen(3000)