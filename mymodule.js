const { userInfo } = require('os');
var url = require('url');

exports.getQueryParams = function(req){

	var params = url.parse(req.url, true).query;
    var paramsString = 	"<br> pid = " + params.pid +
    					"<br> year = " + params.year +
    					"<br> type = " + params.type +
    					"<br> gender = " + params.gender;

	return paramsString;
}

exports.getURL = function(req){
	return "<h1>" + req.url + "</h1>";
}