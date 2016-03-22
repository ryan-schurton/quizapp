var mongoose = require('mongoose');
var quizapp = mongoose.model('quiz');

//Add a quiz
exports.add = function(req, res) {
	var quizAsString = JSON.stringify(req.body); 
  	quizapp.create({"name" : quizAsString}, function (err, result) {
    if (err) return console.log(err);
    return res.send(result);
  });
}

//Get All quizzes
exports.findAll = function(req, res) {
	quizapp.find({}, function(err, results){
		return res.send(results);
	});
};

//Get one quiz
exports.findById = function(req, res){
	//console.log(req.params.id);
  var id = req.params.id;
  quizapp.findOne({'_id':id},function(err, result) {
    return res.send(result);
  });
};
