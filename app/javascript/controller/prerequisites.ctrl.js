
routerApp.controller('prereqCtrl', function(QuizService){
	this.prereq = QuizService.prereqObj.prereq;


	this.createPrereqObj = function() {
		QuizService.prereq_Obj(this.prereq);
	}

})