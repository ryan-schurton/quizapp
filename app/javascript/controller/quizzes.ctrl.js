routerApp.controller('quizzesCtrl', function(QuizService, quizRoutes, simpleObj){


	console.log(simpleObj.data);
	this.testObj = [];

	for(var i = 0; i < simpleObj.data.length; i++) {
		var obj = JSON.parse(simpleObj.data[i].name);
		this.testObj.push({"name" : obj.basicInfo.title, "descrip" : obj.basicInfo.description, "prereq" : obj.prerequisites.prereq ,"id" : simpleObj.data[i]._id });
	}

});