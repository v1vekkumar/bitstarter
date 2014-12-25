var xml2object = require('xml2object');
var request = require('request');

// Create a new xml parser with an array of xml elements to look for
var parser = new xml2object([ 'name' ]);

// Bind to the object event to work with the objects found in the XML file
parser.on('object', function(name, obj) {
    console.log('Found an object: %s', name);
    console.log(obj);
});

// Bind to the file end event to tell when the file is done being streamed
parser.on('end', function() {
    console.log('Finished parsing xml!');
});

// Pipe a request into the parser
request.get('https://api.angel.co/1/search/slugs?query=san-francisco').pipe(parser.saxStream);

foo {
  
  then I can continue typing
}
