 routerApp.service('QuizService', function($http){


 	//Handle the creation of the Basic info Object
 	this.basicInfo_Obj = {};

 	 this.createBasicInfo = function(title, description) {
	    this.basicInfo_Obj.title = title;
	    console.log(title);
	    console.log(description);
	    this.basicInfo_Obj.description = description;
	    console.log(this.basicInfo_Obj);
	}


 	//Handle the creation of the Prequisites Object
 	this.prereqObj = {};

	this.prereq_Obj = function(prereq) {
		
		this.prereqObj.prereq = prereq;
	
	}

	this.Quiz = {
	   "quiz": [

	   ]
	};

	this.createQuiz = function(question_obj) {
		this.Quiz.quiz.push(question_obj);
	}

	this.completeQuiz = {};

	this.completeTheQuiz = function(){

		this.completeQuiz.basicInfo = this.basicInfo_Obj;
		this.completeQuiz.prerequisites = this.prereqObj;
		this.completeQuiz.questions = this.Quiz.quiz

		var stringObj = JSON.stringify(this.completeQuiz);
		
		$http.post('/submit', stringObj).then(function(response){
			console.log("Success");
			console.log(response);
		}, function(response){
			console.log("Fail");
			console.log(response);
		});

	}

	this.theQuiz;

	this.getQuiz = function(name){
		this.theQuiz = name;
		//return name;
	}

 });