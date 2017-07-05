var express = require('express');
var app = express();
const _port = 3000;

app.get('/', function(req, res) {
  res.status(404).send({
    error: 'Page not found!',
    name: 'Todo app'
  });
})


app.get('/users', function(req, res){
  res.send([{
    name: 'Leandro',
    age: 29
  }, {
    name: 'Penis',
    age: 20
  }])
});

app.listen(_port);
module.exports.app = app;
