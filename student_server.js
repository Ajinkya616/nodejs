var http = require('http');
var data = require('./studentmodule');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(data.studentdata(req));
  res.end();
}).listen(8083);
