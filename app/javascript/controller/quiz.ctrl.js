routerApp.controller('quizCtrl', function($scope, $http, QuizService) {

    $scope.quizID = QuizService.theQuiz;


    var curquizObj;
    $scope.atindex = 0;

    $scope.userAnswers = [];
    $scope.quizAnswers = [];


    console.log($scope.quizAnswers.length);

    $http.get("/quiz/" + $scope.quizID).then(function(response) {
    	$scope.question
    	curquizObj = JSON.parse(response.data.name);

    	$scope.question = curquizObj.questions[0].question;

    	$scope.answer1 = curquizObj.questions[0].answers[0];
    	$scope.answer2 = curquizObj.questions[0].answers[1];
    	$scope.answer3 = curquizObj.questions[0].answers[2];
    	$scope.answer4 = curquizObj.questions[0].answers[3];


    	//This will create clickable links to change the current question value
	    $scope.cols = curquizObj.questions.length;
		$scope.arr = [];

	    $scope.arr.length = 0;
	    for (var i = 0; i < parseInt($scope.cols) ; i++) {
	        $scope.arr.push(i);
	    }

        $scope.endAt = curquizObj.questions.length - 1;
        console.log($scope.endAt);

    });

    $scope.addAnswer = function() {
    	console.log("inside chageQes: " + $scope.crt_qest);
    	$scope.userAnswers[$scope.atindex] = $scope.crt_qest;
    	console.log($scope.userAnswers);
    }

    $scope.next = function(direction) {

    	
    	if(direction) {
    		$scope.atindex++;
    	} else {
			$scope.atindex--;
    	}

		$scope.changeQes($scope.atindex);
        $scope.itemClicked($scope.atindex);
	}



    $scope.changeQes = function(index, arr, $event) {

    	//console.log(index);
    	if($scope.atindex == curquizObj.questions.length) {
    		index = 0;
    	} 

    	if($scope.atindex == -1) {
    		index = curquizObj.questions.length - 1;
    	} 


    	$scope.question = curquizObj.questions[index].question;

    	$scope.answer1 = curquizObj.questions[index].answers[0];
    	$scope.answer2 = curquizObj.questions[index].answers[1];
    	$scope.answer3 = curquizObj.questions[index].answers[2];
    	$scope.answer4 = curquizObj.questions[index].answers[3];

    	$scope.crt_qest = $scope.userAnswers[index];

    	$scope.cols = curquizObj.questions.length;
		$scope.arr = [];

	    $scope.arr.length = 0;
	    for (var i = 0; i < parseInt($scope.cols) ; i++) {

	        $scope.arr.push(i);
	    }

	    $scope.atindex = index;


	}

    $scope.itemClicked = function ($index) {
        console.log($index);
        $scope.selectedIndex = $index;
    }



	$scope.markQuiz = function() {

		$scope.right=0;
		$scope.wrong=0;
        $scope.percentage = 0;


		for(var i = 0; i < curquizObj.questions.length; i++) {
			if($scope.userAnswers[i] === curquizObj.questions[i].correctAnswer) {
				console.log("Correct");
				$scope.right++;
			} else {
				$scope.wrong++;
				console.log("Wrong");
			}
		}


        $scope.percentage = (($scope.right  / curquizObj.questions.length) * 100).toFixed(2);


	}

});