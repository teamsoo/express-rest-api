var express = require('express');
var bodyparser = require('body-parser');
var connection = require('./connection');
var routes = require('./routes');

if (require("piping")()) {
  
  var app = express();
  app.use(bodyparser.urlencoded({extended: true}));
  app.use(bodyparser.json());

  // Init Database Connection
  connection.init();

  // Setup Routes
  routes.configure(app);

  var server = app.listen(4040, function() {
    console.log('Server listening on port ' + server.address().port);
  });
}
