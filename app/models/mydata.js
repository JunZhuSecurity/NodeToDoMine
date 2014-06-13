var mongoose = require('mongoose');

module.exports = mongoose.model('Mydata', {
	title : String,
	  score : Number
});