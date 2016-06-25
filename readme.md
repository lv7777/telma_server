# telma-server

telmaの鯖側をsubmoduleとする。

# directory

* main.js

~~すべてのroot. entry point.~~

*warning:現在express.jsがサーバーを起動するファイルとなっています。*

* express.js

expressサーバーを起動する。ルーティングやsqlの処理等はいろんなjsファイルに投げている。

* router.js

expressを使ってルーティング関係を操る。

* socketio.js

socketioを使ってwebsocket通信を担当する。

鯖を立てる必要が有るためexpress.jsに依存？

* sql.js

を使ってmysqlとの通信を担当する。 

# 使用予定フレームワーク

## test

* mocha

* super

## moduleの結合

* webpack

ただclientじゃないんだしほんとにこれいる？

## taskrunner

* gulp

## lint系

* eslint

めっちゃ大事。

## 認証系

* passport

(todo)

* passport-twitter

* passport-facebook

* passport-google

# セキュリティ

某キャン4cのオンラインアタック・ディフェンスでnode.jsサーバーを使うので最高かよ。

ということでせっかくだからこのプロジェクトでセキュリティについても勉強して鯖をガチガチに固めておきたい。

http://expressjs.com/ja/advanced/best-practice-security.html

* helmet

todo.



# express middleware

* body-perser

postを受け取るときに絶対必要。これがないとパラメータを受け取れない。

* cookie-parser

結局sessionがいることになったのでcookie-perserを使うことになった。

* express-session

sessionをgenerateする時とか。

## その他

jsdoc(api書くようのいいのがあったらそっち使う。


# このプロジェクトの進め方・心構え等

github flowの派生版。

基本的にはmaster branchで行う。

ただしバグ修正のみブランチを切る。ブランチ名にはissue numberを含めること。

# contributing

`npm install`

# deploy

herokuを使う。

herokuはmasterしかpushできないっぽい？

(理論的にはdev branchからmasterにpushできるはずなんだけどできなかった。force使っても)

heroku を使うときはちゃんとheroku用の設定を追加すること。

# herokuのcontributing時のfrow
```
git clone telma-server
# git リポジトリを持ってくる

npm install
# package.jsonに書いてあるライブラリをインストール

# 何か処理を追加する

git add
git commit

git push heroku master
# herokuサーバーにアップロード

heroku open
# 何故かできない・・・
```