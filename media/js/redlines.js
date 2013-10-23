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
	$http.get('media/json/redlines.json')
		.success(function(data) {
			redlines.content = data;
	})
		.error(function(data) {
			// handle get errors
	});
	var factory = {};
	factory.getRedlines = function() {
		return redlines;
	};
	return factory;
});

// create controllers
var controllers = {};
//define first controller
controllers.redlinesController = function ($scope, redlineFactory) {
	$scope.redlines = [];
	init();
	function init() {
		$scope.redlines = redlineFactory.getRedlines();
	}
	// delete redline
	$scope.deleteRedline = function (index) {
    $scope.redlines.content.redlines.splice(index, 1)
  };
};

redlineApp.controller(controllers);