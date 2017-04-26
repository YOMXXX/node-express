var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('list', {
        title: 'list',
        movies: [{
        	title: '123'
        }]
    });
});
module.exports = router;