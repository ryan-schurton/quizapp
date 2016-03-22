var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create a schema.
var quizSchema = new Schema({
  Quiz: {type: String}

});

// Create a model using schema.
var Quiz = mongoose.model('Quiz', quizSchema);

// Make this available to our Node applications.
module.exports = Quiz;