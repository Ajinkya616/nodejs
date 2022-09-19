
exports.htmlContentStart = "<html><head><style>body{background-color: cornflowerblue;}table{border: 1px solid black;}</style></head><body>";
exports.htmlContentEnd = "</body></html>";

exports.pTabularDataTemplate = '<table style="width:100%">' +
'<tr>' +
'<td>Project Title </td>'+
'<td>Project Domain</td>'+
'<td>Project Cost</td>'+
'</tr>'+
'<tr>'+
'<td> {{projectTitle}} </td>' +
'<td> {{projectDomain}} </td>' +
'<td> {{projectCost}} </td>' +
'</tr>'+
'</table>';