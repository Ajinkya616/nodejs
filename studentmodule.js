var url = require('url');
exports.studentdata = function(req){

     var data = url.parse(req.url, true).query;
	 var dataString =  '<table style="width:100%">' +
		'<tr>' +
		'<td>StudentId</td>' +
		'<td>year</td>' +
		'<td>Gender</td>' +
		'</tr>' +
		'<tr>' +
		'<td>' + data.studentId + '</td>' +
		'<td>'+data.year+'</td>' +
		'<td>' + data.gender + '</td>' +
		'</tr>' +
		'</table>';
	  					
	return dataString;
}
