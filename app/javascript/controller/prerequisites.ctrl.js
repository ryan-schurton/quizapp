routerApp.controller('prereqCtrl', function(QuizService, Userservice, $location){


	if(!Userservice.getToken()) {
		$location.path('/home');
	} 

	this.prereq = QuizService.prereqObj.prereq;


	this.createPrereqObj = function() {
		QuizService.prereq_Obj(this.prereq);
	}

})