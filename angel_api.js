var request = require('request'); // npm install request
//var apiurl = 'https://api.angel.co/1/search/slugs?query=san-francisco' 
var apiurl = 'https://api.angel.co/1/tags/1692/startups?order=popularity' // Startups in San Francisco



// Update the wordcloud
var updateMarketFrequency = function (startupObj) {
        var marketCounts = {} ;
        for (var i = 0; startupObj.startups[i]; i++) {
            for (var j = 0; startupObj.startups[i].markets[j]; j++) { 
		var marketName = startupObj.startups[i].markets[j].display_name;
		marketCounts[marketName] ? marketCounts[marketName]+=1 :marketCounts[marketName]=1;
            }
	}
 	var words = Object.keys( marketCounts);
 	words.sort(function(a,b){return 	marketCounts[b] - marketCounts[a];});
	for (var k =0;words[k];k++)
		console.log(words[k] + ":" + marketCounts[words[k]]);
}

// Call function 
var callbackfn = function(error, response, body) {

	if (!error && response.statusCode == 200) { 
		//console.log(body);
	var startupObj = JSON.parse(body);

	console.log("The number of enteries per page are :" + startupObj.startups.length);

        for (var i = 0; startupObj.startups[i]; i++) { 
        var outputString = i + ". " + startupObj.startups[i].name 
        
            for (var j = 0; startupObj.startups[i].markets[j]; j++) { 
		outputString = outputString + " <" + startupObj.startups[i].markets[j].display_name + ">";
	}

        outputString = outputString + ":(" + startupObj.startups[i].quality + ") : " + startupObj.startups[i].high_concept;
	console.log(outputString);
               


	}

	}
	
	console.log(updateMarketFrequency(startupObj));
};

request(apiurl, getStartupData);
