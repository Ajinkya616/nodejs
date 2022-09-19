var http = require('http');
var myLib = require('./mymodule');


var htmlContentStart = "<html><head></head>" +
                  "<body>";
var htmlContentEnd = "</body></html>"
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});

    res.write(htmlContentStart);
    
    res.write(myLib.getURL(req));
    res.write(myLib.getQueryParams(req));
    
    res.write(htmlContentEnd);

    res.end();
}).listen(8080);