var mongoose = require('mongoose');
var User = mongoose.model('user');

var user = new User();

  // user.name = req.body.name;
  // user.email = req.body.email;
  //user.setPassword(req.body.password);

//Add a quiz object
exports.createUser = function(req, res) {
	//console.log(req.body);
	//console.log(req.body.pwd);
	user.setPassword(req.body.pwd);

	User.create({ user: req.body.user,
				  email: req.body.email,
				  password: user.hash,
				  salt: user.salt
				}, function (err) {
	  	if (err) return handleError(err);
	});
}

exports.loginUser = function(req, res) {
	console.log(req.body);
	User.findOne({ 'user': req.body.user }, function (err, User) {
 		if (err) return handleError(err);
 		console.log("inside login return");
  		console.log(User.user);
  		console.log(User.email);
  		console.log(User.date);
	})
}
	//var quizAsString = JSON.stringify(req.body); 
  // 	quizapp.create({"name" : quizAsString}, function (err, result) {
  //   if (err) return console.log(err);
  //   return res.send(result);
  // });
	

// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// // Create a schema.
// var userSchema = new Schema({
//   user: String,
//   email: String,
//   password: String,
//   date: { type: Date, default: Data.now }

// });

// // Create a model using schema.
// var user = mongoose.model('user', userSchema);

// // Make this available to our Node applications.
// module.exports = user;