// packages

var bodyParser = require('body-parser');
var express = require('express');
var methodOverride = require('method-override');
var http = require('http');
var hb = require('handlebars');
var exphbs = require('express-handlebars');

// create the app

var app = express();

// serve static files from the current directory

app.use(express.static('public'));

// port

var PORT = process.env.PORT || 3000;

// use bodyParser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text({ type: 'text/html' }));
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// method override

app.use(methodOverride("_method"));

// routes
// app.get('/', function (req, res) {

// 	res.render('index');
// });
var routes = require('./controllers/controller.js');
//
app.use('/', routes);

app.use("/update", routes);

app.use("/create", routes);

// listenter

app.listen(PORT, function() {

	console.log("server is working open http://localhost:3000");

});