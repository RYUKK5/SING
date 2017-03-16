
var port = 7270;

var express = require('express');
var app = express();

app.use(express.static('docs'));

app.listen(port, function() {
  console.log("Express: Port: %d, Mode: %s", port, app.settings.env)
});
