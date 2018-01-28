'use strict';

var express = require('express'),
  request = require('request'),
  fs = require('fs'),
  app = express();

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(__dirname + "/../static"));

// a route function mounted on the /apis/ path. The function GET HTTP requests on the path.
app.get('/v1/public-apis/', function (req, res, next) {
  var url = 'https://raw.githubusercontent.com/toddmotto/public-apis/master/json/entries.min.json';
  req.pipe(request(url)).pipe(res);
});

var server = app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

function send_success(res, data) {
  res.writeHead(200, { "Content-Type": "application/json" });
  var output = { error: null, data: data };
  res.end(JSON.stringify(output) + "\n");
}

function send_failure(res, server_code, err) {
  var code = (err.code) ? err.code : err.name;
  res.writeHead(server_code, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: code, message: err.message }) + "\n");
}
