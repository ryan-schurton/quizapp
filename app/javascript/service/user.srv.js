 routerApp.service('Userservice', function($http, $window, $location){

 	function saveToken(token) {
    	$window.localStorage['mean-token'] = token;
    	$location.path('/quizzes');
    };

    this.getToken = function () {
    	return $window.localStorage['mean-token'];
    };

 	this.createUser = function(user, email, pwd){


 		var userObj = {user, email, pwd};


 		$http.post('/register', userObj).then(function(response){
			console.log("Success");
			saveToken(response.data.token);
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
				saveToken(response.data.token);
			}, function(response){
				console.log("Fail");
				console.log(response);
			});
 		}

 });