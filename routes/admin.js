var express = require('express');
var router = express.Router()

router.get('', function (req, res) {
	res.render('admin', {
		title:'admin',
    movies: {
    	title: '123'
    }
	})
})


module.exports = router;