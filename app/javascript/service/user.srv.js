 routerApp.service('Userservice', function($http, $window){

 	function saveToken(token) {
    	$window.localStorage['mean-token'] = token;
    };

    this.getToken = function () {
    	return $window.localStorage['mean-token'];
    };

 	this.createUser = function(user, email, pwd){
 		// console.log(user);
 		// console.log(email);
 		// console.log(pwd);

 		var userObj = {user, email, pwd};


 		$http.post('/register', userObj).then(function(response){
			console.log("Success");
			//handle mongoose error code
			//handle mongoose error message
			console.log(response);
		}, function(response){
			console.log("Fail");
			console.log(response);
		});
 	}

 	 	this.loginUser = function(user, pwd){

 			var userObj = {user, pwd};


	 		$http.post('/login', userObj).then(function(response){
				console.log("Success");
				console.log(response.data.token);
				saveToken(response.data.token);
				//console.log($window.localStorage['test']);
			}, function(response){
				console.log("Fail");
				console.log(response);
			});
 		}

 });