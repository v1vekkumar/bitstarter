var express = require('express')
var app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

var fs = require('fs');

app.get('/', function(request, response) {
  output = fs.readFileSync('index.html').toString();
  response.send(output);
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
