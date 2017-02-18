// packages
var express = require('express');

var iceCream = require('../models/newgame.js');

var router = express.Router();


// routes for express

router.get('/', function(req, res){

    res.render('index');

});

router.get('/leader', function(req, res){

  iceCream.all(function (data) {

    var hbsObj = { leaderboard: data };
    res.render('index', hbsObj);

  });
});

router.post('/create', function (req, res) {

	iceCream.create(req.body.name, function(result){

	});

});


router.put('/update', function (req, res) {


});

module.exports = router; 