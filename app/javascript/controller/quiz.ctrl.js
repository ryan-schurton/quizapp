routerApp.controller('quizCtrl', function($scope, simpleObj, QuizService, quizRoutes, $location) {

    // if(!simpleObj.data){
    //     $location.path("/home");
    // } else {
    // }

    //var curquizObj = JSON.parse(simpleObj.data.name);
    //console.log(curquizObj);
        //Move out of the controller and into quiz.route.srv.js
    	//$scope.question;
        //this.curquizObj = 0;

        this.curquizObj = JSON.parse(simpleObj.data.name);
        this.atindex = 0;
        this.userAnswers = [];

        // this.crt_qest = 2;
        
       // this.correctAnswer = this.curquizObj.questions[0].correctAnswer;
        //console.log(this.curquizObj.questions[0].correctAnswer);
        //console.log("the correct answer is : " + this.correctAnswer);

        /********************** Start of add new question *****************************/
        this.displayCurrentQuestion = function(quesIndex) {
            this.crt_qest = this.userAnswers[quesIndex];
            //This is the quiz object returned from the resolve
            //it contains basicInfo , prerequisites, and questions
        	//this.curquizObj = JSON.parse(simpleObj.data.name);

            //Display the very first object
            //this.question;
            //Store the correct answer to be tested
            this.correctAnswer = this.curquizObj.questions[quesIndex].correctAnswer;

            //get a question from curquizObj to display in the partial quiz.html
            this.question = this.curquizObj.questions[quesIndex].question;

            //this is an empty array that will hold all the question options
            this.currentQuestion = [];

            //This loop will add the current selected question to currentQuestion array to display to end user
            for(var i = 0; i < this.curquizObj.questions[quesIndex].answers.length; i++) {
                this.currentQuestion.push({"answer" : this.curquizObj.questions[quesIndex].answers[i], "value" : i + 1});
            }
        }
        /********************** End of add new question *****************************/



        /********************** Start of Showing question button selector *****************************/
    	//This will create clickable links to change the current question value
	    this.cols = this.curquizObj.questions.length;
		this.arr = [];

	    this.arr.length = 0;
	    for (var i = 0; i < parseInt(this.cols) ; i++) {
	        this.arr.push(i);
	    }

        this.endAt = this.curquizObj.questions.length - 1;
        /********************** End of Showing question button selector *****************************/
        
        this.addAnswer = function(answer) {
            console.log("My Answer is : " + answer);
            //console.log("Correct Answer : " + );
            //console.log('save');
            console.log("inside chageQes: " + this.crt_qest);
            console.log("Currently at question: " + this.atindex);
            this.userAnswers[this.atindex] = this.crt_qest; //assign Answer to index
            //console.log(this.userAnswers);
            //console.log($scope.atindex);
        }

        //console.log(this.endAt);

        //Will change the question base on the direction clicked
        this.next = function(direction) {
            console.log("abc");
            if(direction) {
                this.atindex++;
            } else {
                this.atindex--;
            }

            this.changeQes(this.atindex);
            this.itemClicked(this.atindex);
        }
    

    this.changeQes = function(index, arr, $event) {

        this.atindex = index;
    	if(this.atindex == this.curquizObj.questions.length) {
    		index = 0;
    	} 

    	if(this.atindex == -1) {
    		index = this.curquizObj.questions.length - 1;
    	} 

        //call function to change question
        //this.displayCurrentQuestion(index);

    	this.cols = this.curquizObj.questions.length;
		this.arr = [];

	    this.arr.length = 0;
	    for (var i = 0; i < parseInt(this.cols) ; i++) {

	        this.arr.push(i);
	    }
        
	    this.atindex = index;


	}

    this.itemClicked = function($index) {

        this.selectedIndex = $index;
        this.displayCurrentQuestion($index); // call function to change the displayed question


    }
    //TODO check what question the user is one ex: 0, 1, 2 ,3 

    //TODO Check in userAnswer array if user has answered this question before

    //TODO if there is an answer at this INDEX select the matching radio button value

    //TODO if not insure no radio buttons are selected

/**/

	this.markQuiz = function() {

		this.right=0;
		this.wrong=0;
        this.percentage = 0;


		for(var i = 0; i < this.curquizObj.questions.length; i++) {
            //console.log(this.curquizObj.questions[i].correctAnswer + " === " + this.userAnswers[i]);
			if(this.curquizObj.questions[i].correctAnswer === this.userAnswers[i]) {
				console.log("Correct");
				this.right++;
			} else {
				this.wrong++;
				console.log("Wrong");
			}
		}

        this.percentage = ((this.right  / this.curquizObj.questions.length) * 100).toFixed(2);

	}

});