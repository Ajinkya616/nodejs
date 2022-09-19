var http = require('http');
var emp = require('./employeemodule')
var utils = require('./htmlUtils')      

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html'});

    res.write(utils.htmlContentStart);
    res.write(emp.employeeData(req));
    res.write(utils.htmlContentEnd);
    
    res.end();
}).listen(8082);