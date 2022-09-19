var http = require('http');
var p = require('./projectModule');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type' : 'Text/html'});

    res.write(p.projectData(req));

    res.end();
}).listen(8083);