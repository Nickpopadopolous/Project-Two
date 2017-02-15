// packages

var express = require('express');
// var phaser = require('phaser')

var router = express.Router();

// var game = require('../game.js');

// routes for express

router.get('/', function(req, res){

  res.redirect('/main-game');

});

router.get('/main-game', function (req, res) {

	// res.json(res);

	// res.render('/main-game');

	// res.sendFile(__dirname, '/../main-game');

	console.log(res);

});

router.post('/main-game/create', function (req, res) {

});


router.put('/main-game/update', function (req, res) {

});


module.exports = router; 