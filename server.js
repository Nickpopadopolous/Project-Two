var http = require('http');

var PORT = process.env.PORT || 3000;

function handleRequest(request, response) {

	response.end("we here" + request.url);
}


var server = http.createServer(handleRequest);

server.listen(PORT, function() {

	console.log("server is working");
});