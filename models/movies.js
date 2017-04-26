var mongoose = require('mongoose');
var movieSchema = require('../schemas/movies');
var movie = mongoose.model('movie', movieSchema);

module.exports = movie;