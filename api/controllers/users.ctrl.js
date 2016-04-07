var mongoose = require('mongoose');
var User = mongoose.model('user');
var expressJwt = require('express-jwt');
var jwt = require('jsonwebtoken');

var user = new User();

  // user.name = req.body.name;
  // user.email = req.body.email;
  //user.setPassword(req.body.password);

//Add a quiz object
exports.createUser = function(req, res) {

	user.setPassword(req.body.pwd);

	User.create({ user: req.body.user,
				  email: req.body.email,
				  password: user.hash,
				  salt: user.salt
				}, function (err) {
	  	if (err) { 
	  		//console.log("some shit went wrong");
	  		res.json({errcode: err.code, errmess: 'some shit went wrong'});
	  	} else {
	  		var profile = { user: req.body.user, email: req.body.email };
			var token = jwt.sign(profile, "top", { expiresInMinutes: 60*5 });
 			res.json({token: token});

	  	}
	});
}

exports.loginUser = function(req, res) {
	//console.log(req.body);

	User.findOne({ user: req.body.user }, function (err, userdata) {
		if (err) {
			res.json({message: "Something went wrong please try again"});
		}
		if (!userdata) {
			res.json({message: "login credentials did not match, please try again"});
		}
		//console.log(userdata);

		if(user.validPassword(req.body.pwd, userdata.salt, userdata.password)){
			var profile = { user: req.body.user, email: req.body.email };
			var token = jwt.sign(profile, "top", { expiresInMinutes: 60*5 });
 			res.json({token: token});
 			//console.log(token);
		} else {
			res.json({message: "login credentials did not match, please try again"});
		}
 		// var profile = {
 		// 	user: req.body.user,
 		// 	email: req.body.email,
 		// }


 		// user.validPassword(req.body.pwd, User.salt);
 		// var token = jwt.sign(profile, "top", { expiresInMinutes: 60*5 });
 		// res.json({token: token});
 		// console.log(token);
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