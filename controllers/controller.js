// packages
var express = require('express');

var router = express.Router();



// routes for express

router.get('/', function(req, res){

    //res.render(__dirname, '/../main');

    //res.sendFile(path.join(__dirname, '/../main'));

    res.render('index');

});

router.post('/create', function (req, res) {



});


router.put('/update', function (req, res) {


 });

module.exports = router; 