routerApp.controller('registerCtrl', function(Userservice, $window, $location){


	//Userservice.getToken();

	//var isLoggedIn = function() {
	  // var token = Userservice.getToken();
	  // var payload;

	  // if(token){
	  //   payload = token.split('.')[1];
	  //   payload = $window.atob(payload);
	  //   payload = JSON.parse(payload);
	  //   console.log(payload);

	  // } else {
	  //   console.log("no token");
	  // }
	//};

	this.register = function() {
		Userservice.createUser(this.user, this.email ,this.pwdwrd);
		//$location.path('/quizzes');
	}
});