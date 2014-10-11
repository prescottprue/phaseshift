angular.module('phaseShiftApp',['ionic','phaseShiftApp.controllers'])
.run(function(){
	Parse.initialize("v7JzZGLAcUTCaZOInmCwZ1onQbEz5p5sHM5ZkpYJ", "19bPJ5TvSK7qdX1i88wqG9YoKMUUPmNGirXHGxr8");
})
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$stateProvider
	.state('home', {
		url: '/',
		controller:'HomeCtrl',
		templateUrl: 'templates/home.html'
	})
	.state('login', {
		url: '/',
		controller:'LoginCtrl',
		templateUrl: 'templates/login.html'
	})
	$urlRouterProvider.otherwise('/login');
}])