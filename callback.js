var request = require('request'); // npm install request
var apiurl = 'http://nodejs.org/api/index.json';

var callbackfn = function(error, response, body) {
	if (!error && response.statusCode == 200) {
	console.log(body);
	}
};

request(apiurl, callbackfn);
