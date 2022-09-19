var url = require('url');
var utils = require('./htmlUtils');

exports.projectData = function(req){
    
    var pdata = url.parse(req.url, true).query;
    var pstring = utils.pTabularDataTemplate
                    .replace("{{projectTitle}}", pdata.projectTitle)
                    .replace("{{projectDomain}}", pdata.projectDomain)
                    .replace("{{projectCost}}", pdata.projectCost);
    
    return pstring;
}