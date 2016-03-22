routerApp.controller('basicCtrl', function($http, QuizService){

	this.title = QuizService.basicInfo_Obj.title;
	this.description = QuizService.basicInfo_Obj.description;
	
	this.basicinfo = function() {
		QuizService.createBasicInfo(this.title, this.description);

	}
});