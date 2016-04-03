routerApp.controller('basicCtrl', function(QuizService, Userservice, $location){


	if(!Userservice.getToken()) {
		$location.path('/home');
	} 

	this.title = QuizService.basicInfo_Obj.title;
	this.description = QuizService.basicInfo_Obj.description;

	this.basicinfo = function() {
		QuizService.createBasicInfo(this.title, this.description);
	}

});