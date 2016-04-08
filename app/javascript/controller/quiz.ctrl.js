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
        this.startNow = new Date();



        
       // this.correctAnswer = this.curquizObj.questions[0].correctAnswer;
        //console.log(this.curquizObj.questions[0].correctAnswer);
        //console.log("the correct answer is : " + this.correctAnswer);

        /********************** Start of add new question *****************************/
        this.displayCurrentQuestion = function(quesIndex) {
            this.crt_qest = this.userAnswers[quesIndex];

            console.log(this.crt_qest);
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

    this.timer = function() {
        setInterval(function(){

          "aaa";
        
        }, 1000);
    }

	this.markQuiz = function() {

		this.right=0;
		this.wrong=0;
        this.percentage = 0;

        this.passDate = this.startNow;
        this.nowDate = new Date();

        var diff = (this.passDate - this.nowDate)/1000;
        var diff = Math.abs(Math.floor(diff));
        
        var days = Math.floor(diff/(24*60*60));
        var leftSec = diff - days * 24*60*60;
        
        var hrs = Math.floor(leftSec/(60*60));
        var leftSec = leftSec - hrs * 60*60;
          
        var min = Math.floor(leftSec/(60));
        var leftSec = leftSec - min * 60;


        this.diffDate = hrs+":"+min+":"+leftSec;
        //this.diffDate = setTimeout(this.timer,1000);


        //this.timeDiff = Math.abs(this.passDate - this.nowDate);
        //this.diffDate = Math.ceil(this.timeDiff / (1000 * 3600 * 24));
        
        //console.log(String(this.diffDate));

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

    this.restart = function() {
        this.atindex = 0;
        this.userAnswers = [];
        this.crt_qest = 0;
        console.log(this.crt_qest);
    }

});