routerApp.controller('submitCtrl', function($http, QuizService){


	this.buildQuestion = function() {

		//Call The completeTheQuiz function that exist in the QuizService 
		//The completeTheQuiz function will will append the basicInfo_Obj, prereqObj, 
		// and Quiz.quiz obj to the final object completeQuiz 
		QuizService.completeTheQuiz();

		//The completeQuiz obj is now complete and holds the values for the whole 
		this.quizObject = QuizService.completeQuiz; 

		var stringObj = JSON.stringify(this.quizObject);
		$http.post('/submit',stringObj)
		.then(function(response){
			console.log(response);
		});

	}


})

