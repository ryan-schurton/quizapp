routerApp.service('quizRoutes', function($http){
		//Called this service method in the control "quiz.ctrl.js"
		//56edc209494ec6681cacc9be

		this.getQuiz = function(quizid) {	

			return $http
				.get('/quiz/' + quizid)
				.then(function(response){
					return response;
					// return deferred.resolve(JSON.parse(response.data.name));
				}, function(response){
					return response;
			});	
				//return defer.promise;

		}
	
	 //    });
 


  //   	//This will create clickable links to change the current question value
	 //    $scope.cols = curquizObj.questions.length;
		// $scope.arr = [];

	 //    $scope.arr.length = 0;
	 //    for (var i = 0; i < parseInt($scope.cols) ; i++) {
	 //        $scope.arr.push(i);
	 //    }

  //       $scope.endAt = curquizObj.questions.length - 1;
  //       console.log($scope.endAt);
        //console.log("aaa");

	//Called this service method in the control "quizzes.ctrl.js"
	//this get method will return all quizzes store in the database
	this.getQuizzes = function() {
		return $http.get("/home").then(function(response){
			return response;
		}, function(response) {
			return response;
			
			// for(var i = 0; i < response.data.length; i++) {
			// 	var obj = JSON.parse(response.data[i].name);
			// 	$scope.testObj.push({"name" : obj.basicInfo.title, "descrip" : obj.basicInfo.description, "prereq" : obj.prerequisites.prereq ,"id" : response.data[i]._id });
			// }
	    });
	}


});