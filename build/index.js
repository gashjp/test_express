const {
  default: app
} = require('../lib/app');

app.init(); // localhost:3000 にアクセスされた時のRespond

app.get("/", function (request, respond) {
  //ここでconsole.log(request);とするとrequestの内容みれる
  respond.send("Hello World");
}); // localhost:3000/profile にアクセスされた時のRespond

app.get("/profile", function (request, respond) {
  respond.send("My name is Kibinag0. I'm from Japan.");
});
/* 2. listen()メソッドを実行して3000番ポートで待ち受け。*/

var server = app.listen(3000, function () {
  console.log("Node.js is listening to PORT:" + server.address().port);
});
start();

async function start() {}

;
//# sourceMappingURL=index.js.map