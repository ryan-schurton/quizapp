var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider

        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'partials/basicinfo.html',
            controller: 'basicCtrl as ctrl'
        })
        
        //CREATE A QUIZ VIEWS ========================================
        .state('questions', {
            url: '/questions',
            templateUrl: 'partials/questions.html',
            controller: 'quesCtrl as ctrl'
        })

        .state('prerequisites', {
            url: '/prerequisites',
            templateUrl: 'partials/prerequisites.html',
            controller: 'prereqCtrl as ctrl'
        })

        .state('submit', {
            url: '/submit',
            templateUrl: 'partials/submit.html',
            controller: 'submitCtrl as ctrl'
        })

        .state('quizzes', {
            url: '/quizzes',
            templateUrl: 'partials/quizindex.html',
            controller: 'quizzesCtrl as ctrl'
        })
        .state('quiz', {
            url: '/quiz/:id',
            templateUrl: 'partials/quiz.html',
            controller: 'quizCtrl',
            resolve: {

                simpleObj: function(QuizService, $stateParams){

                    return QuizService.getQuiz($stateParams.id);
                }
            }
    })
});
