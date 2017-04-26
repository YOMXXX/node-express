var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express',
        movies: [{
            _id: 1,
            poster: 'http://img.mukewang.com/user/56b784f6000152fc01800180-40-40.jpg',
            title: '大家好'
        }, {
            _id: 1,
            poster: 'http://img.mukewang.com/user/56b784f6000152fc01800180-40-40.jpg',
            title: '大家好'
        }, {
            _id: 1,
            poster: 'http://img.mukewang.com/user/56b784f6000152fc01800180-40-40.jpg',
            title: '大家好'
        }, {
            _id: 1,
            poster: 'http://img.mukewang.com/user/56b784f6000152fc01800180-40-40.jpg',
            title: '大家好'
        }]
    });
});
module.exports = router;
