routerApp.controller('submitCtrl', function(QuizService){


	this.buildQuestion = function() {

		//Call The completeTheQuiz function that exist in the QuizService 
		//The completeTheQuiz function will will append the basicInfo_Obj, prereqObj, 
		// and Quiz.quiz obj to the final object completeQuiz 
		QuizService.completeTheQuiz();

	}


})

