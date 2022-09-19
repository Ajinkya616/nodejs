var url = require('url');
var utils = require('./htmlUtils')

exports.employeeData = function(req){

    var empdata = url.parse(req.url, true).query;
    var empstring = utils.empTabularDataTemplate
        .replace("{{empName}}", empdata.employeename)
        .replace("{{empPost}}", empdata.employeepost)
        .replace("{{empSalary}}", empdata.employeesalary);
                     
    return empstring;
}