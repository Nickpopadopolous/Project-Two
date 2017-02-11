// packages

var express = require('express');
var router = express.Router();

// routes for express

router.get('/', function(req, res){

  res.redirect('main');

});

router.get('/main', function (req, res) {

  preload.all(function (data) {


  });

});

router.post('/', function (req, res) {

});

module.exports = router;