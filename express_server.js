var express = require('express');
var app = express();
var port = 8080;

var urlDatabase = {
  "b2xVn2": "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com"
};

app.get("/", (req, res) => {
  res.end("Hello!");
});

app.get('/urls.json', (req,res) => {
  res.json(urlDatabase);
});

app.get('/hello', (req, res) => {
  var html = '<html><body><b>Hello World!</b></body></html>';
  res.end(html);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});