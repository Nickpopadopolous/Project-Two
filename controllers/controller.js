// packages

var express = require('express');
// var phaser = require('phaser')

var router = express.Router();

// var game = require('../game.js');

// routes for express

router.get('/', function(req, res){

    res.sendFile(__dirname, '/../main-game');

});

module.exports = router; 