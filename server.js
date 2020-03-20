const express = require("express");
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.use("css", express.static(__dirname + '/public/stylesheets'));
app.use("js", express.static(__dirname + '/public/javascripts'));
app.use("dictionary", express.static(__dirname + '/public/dictionary.txt'));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const server = app.listen((8081, function () {
  const port = server.address().port;
  console.log(`Server started at ${port}`);
}));