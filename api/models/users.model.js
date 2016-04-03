var crypto = require('crypto');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create a schema.
var userSchema = new Schema({
  user: {
    type: String
  },
  email: { type: String,
    trim: true,
    unqiue: true,
    require: true
  },
  date: { 
  	type: Date, 
  	default: Date.now 
  },
  password: String,
  salt: String

});

userSchema.methods.setPassword = function(password){
	this.salt = crypto.randomBytes(16).toString('hex');
	this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
};

userSchema.methods.validPassword = function(password, salt) {
  //console.log("is valid?..");
  //console.log(password);
  //console.log(salt);
  var hash = crypto.pbkdf2Sync(password, salt, 1000, 64).toString('hex');
  console.log(hash);
  // return this.hash === hash;
};

// Create a model using schema.
var user = mongoose.model('user', userSchema);

// Make this available to our Node applications.
module.exports = user;