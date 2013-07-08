
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
  var fs = require('fs');
  fs.readFile('index.html', function(err, data) {
      if(err) throw err;
      var len = data.length;
      var buf = new Buffer(len);
      response.send(buf.toString('utf8', 0. len));
  });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
