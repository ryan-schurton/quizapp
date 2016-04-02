 routerApp.service('Userservice', function($http){

 	this.createUser = function(user, email, pwd){
 		// console.log(user);
 		// console.log(email);
 		// console.log(pwd);

 		var userObj = {user, email, pwd};

 		console.log(userObj);

 		$http.post('/register', userObj).then(function(response){
			console.log("Success");
			console.log(response);
		}, function(response){
			console.log("Fail");
			console.log(response);
		});
 	}

 	 	this.loginUser = function(user, pwd){

 			var userObj = {user, pwd};

 			console.log(userObj);

	 		$http.post('/login', userObj).then(function(response){
				console.log("Success");
				console.log(response);
			}, function(response){
				console.log("Fail");
				console.log(response);
			});
 		}

 });