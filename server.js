var express = require('express');

var app = express();
app.use(express.static('htdoocs'));

var port = 7270;
app.listen(port, ()=> {
  console.log('Expressサーバー起動');
});