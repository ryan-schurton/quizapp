routerApp.controller('quesCtrl', function(QuizService, Userservice, $location){


	if(!Userservice.getToken()) {
		$location.path('/home');
	} 


 		this.cols = QuizService.Quiz.quiz.length;
    	this.arr = [];
    
        this.arr.length = 0;
        for (var i = 0; i < parseInt(this.cols) ; i++) {
            this.arr.push(i);
        }

	this.quizInfo = function() {
		this.curQuestion = {};

		this.curQuestion.question = this.question;
		this.curQuestion.answers = [this.answer1 ,this.answer2 ,this.answer3 ,this.answer4];
		this.curQuestion.correctAnswer = this.crt_qest;


		QuizService.createQuiz(this.curQuestion);

		this.cols = QuizService.Quiz.quiz.length;
    	this.arr = [];
    
        this.arr.length = 0;
        for (var i = 0; i < parseInt(this.cols) ; i++) {
            this.arr.push(i);
        }

        this.question = "";
		this.answer1 = "";
		this.answer2 = "";
		this.answer3 = "";
		this.answer4 = "";
		this.crt_qest = 0;

		console.log(QuizService.Quiz);

	}

	this.changeQes = function(index) {

		this.question = QuizService.Quiz.quiz[index].question;
		this.answer1 = QuizService.Quiz.quiz[index].answers[0];
		this.answer2 = QuizService.Quiz.quiz[index].answers[1];
		this.answer3 = QuizService.Quiz.quiz[index].answers[2];
		this.answer4 = QuizService.Quiz.quiz[index].answers[3];
		this.crt_qest = QuizService.Quiz.quiz[index].correctAnswer;
	}


})
