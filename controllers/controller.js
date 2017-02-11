// packages

var express = require('express');
var router = express.Router();

// routes for express

//Routes for Express

router.get('/', function(req, res){

  res.redirect('/main');

});

router.get('/main', function (req, res) {

  preload.all(function (data) {

  });
  
});


module.exports = router;