routerApp.controller('loginCtrl', function(Userservice){



	this.loginUser = function(){
		Userservice.loginUser(this.user, this.pwdwrd);
		console.log(Userservice.getToken());

	}
});