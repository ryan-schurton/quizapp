routerApp.controller('quizzesCtrl', function($scope, $http, QuizService){

	$scope.testObj = [];
	$http.get("/quizzes").then(function(response) {

		for(var i = 0; i < response.data.length; i++) {
			var obj = JSON.parse(response.data[i].name);
			$scope.testObj.push({"name" : obj.basicInfo.title, "descrip" : obj.basicInfo.description, "prereq" : obj.prerequisites.prereq ,"id" : response.data[i]._id });

		}

    });
});