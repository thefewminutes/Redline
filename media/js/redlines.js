var redlineApp = angular.module('redlineApp', ['ngRoute']);
		
redlineApp.config(function($routeProvider) {
	$routeProvider
		.when('/',
			{
				controller: 'redlinesController',
				templateUrl: 'partials/inprogress.html'
			})
		.when('/pending',
			{
				controller: 'redlinesController',
				templateUrl: 'partials/pending.html'
			})
		.when('/closed',
			{
				controller: 'redlinesController',
				templateUrl: 'partials/closed.html'
			})
		.otherwise({ redirectTo: '/'});
});
//$locationProvider.html5Mode(true);

// get all the redlines
redlineApp.factory('redlineFactory', function($http) {
	var redlines = {content:null};
	$http.get('media/json/redlines.json').success(function(data) {
		redlines.content = data;
	});
	var factory = {};
	factory.getRedlines = function() {
		return redlines;
	};
	return factory;
});

var controllers = {};
controllers.redlinesController = function ($scope, redlineFactory) {
	$scope.redlines = [];
	init();
	function init() {
		$scope.redlines = redlineFactory.getRedlines();
	}
};

redlineApp.controller(controllers);