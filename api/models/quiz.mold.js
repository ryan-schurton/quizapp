var mongoose = require('mongoose');
var schema = mongoose.Schema;

var quizschema = new schema({
	name: String,
});

mongoose.model('quiz', quizschema);