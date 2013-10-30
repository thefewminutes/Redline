var redlineApp = angular.module('redlineApp', ['ngRoute']);
		
redlineApp.config(function($routeProvider) {
	$routeProvider
		.when('/',
			{
				controller: 'inprogressController',
				templateUrl: 'partials/inprogress.html'
			})
		.when('/pending',
			{
				controller: 'pendingController',
				templateUrl: 'partials/pending.html'
			})
		.when('/closed',
			{
				controller: 'closedController',
				templateUrl: 'partials/closed.html'
			})
		.otherwise({ redirectTo: '/'});
});
//$locationProvider.html5Mode(true);

// get all the in progress redlines
redlineApp.factory('inprogressFactory', function($http) {
	var redlines = {content:null};
	$http.get('media/json/inprogress.json')
		.success(function(data) {
			redlines.content = data;
	})
		.error(function(data) {
			alert('could not get data');
	});
	var factory = {};
	factory.getRedlines = function() {
		return redlines;
	};
	return factory;
});

// get all the pending redlines
redlineApp.factory('pendingFactory', function($http) {
	var redlines = {content:null};
	$http.get('media/json/pending.json')
		.success(function(data) {
			redlines.content = data;
	})
		.error(function(data) {
			alert('could not get data');
	});
	var factory = {};
	factory.getRedlines = function() {
		return redlines;
	};
	return factory;
});

// get all the closed redlines
redlineApp.factory('closedFactory', function($http) {
	var redlines = {content:null};
	$http.get('media/json/closed.json')
		.success(function(data) {
			redlines.content = data;
	})
		.error(function(data) {
			alert('could not get data');
	});
	var factory = {};
	factory.getRedlines = function() {
		return redlines;
	};
	return factory;
});

// create controllers
var controllers = {};

// inprogress tab controller
controllers.inprogressController = function ($scope, inprogressFactory) {
	$scope.redlines = [];
	init();
	function init() {
		$scope.redlines = inprogressFactory.getRedlines();
	}
	// display redline description in table when row is clicked
	$scope.selectRedline = function(redline) {
		$scope.selectedRedline = redline;
	};
	$scope.isSelected = function(redline) {
		return $scope.selectedRedline === redline;
	};
	
	// delete redline
	$scope.deleteRedline = function (item) {
		var index = $scope.redlines.content.redlines.indexOf(item);
    	if (index != -1) {
        	$scope.redlines.content.redlines.splice(index, 1);
    	} 
	};

};

// pending tab controller
controllers.pendingController = function ($scope, pendingFactory) {
	$scope.redlines = [];
	init();
	function init() {
		$scope.redlines = pendingFactory.getRedlines();
	}
	
	// display redline description in table when row is clicked
	$scope.selectRedline = function(redline) {
		$scope.selectedRedline = redline;
	};
	$scope.isSelected = function(redline) {
		return $scope.selectedRedline === redline;
	};
	// delete redline
	$scope.deleteRedline = function (item) {
		var index = $scope.redlines.content.redlines.indexOf(item);
    	if (index != -1) {
        	$scope.redlines.content.redlines.splice(index, 1);
    	} 
	};

};

// closed tab controller
controllers.closedController = function ($scope, closedFactory) {
	$scope.redlines = [];
	init();
	function init() {
		$scope.redlines = closedFactory.getRedlines();
	}
	
	// display redline description in table when row is clicked
	$scope.selectRedline = function(redline) {
		$scope.selectedRedline = redline;
	};
	$scope.isSelected = function(redline) {
		return $scope.selectedRedline === redline;
	};
	// delete redline
	$scope.deleteRedline = function (item) {
		var index = $scope.redlines.content.redlines.indexOf(item);
    	if (index != -1) {
        	$scope.redlines.content.redlines.splice(index, 1);
    	} 
	};

};

redlineApp.controller(controllers);