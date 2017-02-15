// packages

var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var http = require('http');

// create the app

var app = express();

// Lets create a server (Allowed to create server before request/response)

function handleRequest(request, response) {

	response.end("It Works!" + request.url);
}

var server = http.createServer(handleRequest);

// serve static files from the current directory

app.use(express.static(__dirname));

// port

var PORT = process.env.PORT || 3000;

// use bodyParser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text({ type: 'text/html' }));
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));

// method override

app.use(methodOverride("_method"));

// routes

var routes = require('./controllers/controller.js');

app.use('/', routes);

// listenter

app.listen(PORT, function() {

	console.log("server is working");

});