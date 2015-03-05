var express = require('express');
var bodyParser = require('body-parser');
var urban = require('urban');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.post('/', function (req, res) {
  if (!req.body || !req.body.text) return res.sendStatus(400)
  urban(req.body.text).first(function (def) {
    res.send("Definition: " + def.definition + "\nExamples:\n" + def.example);
  });
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})