// packages
var express = require('express');

var router = express.Router();



// routes for express

router.get('/', function(req, res){

    res.render('index');

});

router.get('/leader', function(req, res){

    res.render('leaderboard');

});

router.post('/create', function (req, res) {

	res.render('leaderboard');

});


router.put('/update', function (req, res) {


});

module.exports = router; 