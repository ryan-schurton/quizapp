routerApp.controller('basicCtrl', function(QuizService, Userservice, $location){

	var token = Userservice.getToken;

	if(!token) {
		$location.path('/home');
	} else {
		this.title = QuizService.basicInfo_Obj.title;
		this.description = QuizService.basicInfo_Obj.description;
	
		this.basicinfo = function() {
			QuizService.createBasicInfo(this.title, this.description);

		}
	}

	//console.log("basic ctrl: " + Userservice.getToken());


});