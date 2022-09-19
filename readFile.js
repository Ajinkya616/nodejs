var http = require('http');
var fs = require('fs');
http.createServer(function (req,res){
    fs.readFile('htmlPage.html', function(err, data){
        if(err){
            console.log("Error while reading file: ", err);
        } else {
            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.write(data);
            return res.end();    
        }
    }); 
}).listen(8080);