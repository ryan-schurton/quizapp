routerApp.controller('registerCtrl', function(Userservice){

	//this.name = "ryan";

	//username
	//this.user;
	//email
	//this.email;
	//password
	//this.pwdwrd;
	//password confirm



	// this.title = QuizService.basicInfo_Obj.title;
	// this.description = QuizService.basicInfo_Obj.description;
	
	// this.basicinfo = function() {
	// 	QuizService.createBasicInfo(this.title, this.description);

	// }

	this.register = function(){
		Userservice.createUser(this.user, this.email, this.pwdwrd);
		// console.log(this.user);
		// console.log(this.email);
		// console.log(this.pwdwrd);
		//send data to $http service
		//console.log("user created");
	}
});