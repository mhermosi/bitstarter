
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
  var fs = require('fs');
  fs.readFile('index.html', function(err, data) {
      if(err) throw err;
      response.send(data.toString());
  });
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
