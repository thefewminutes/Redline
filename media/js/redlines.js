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

// get all the redlines
redlineApp.factory('redlinesFactory', function($http) {
	var redlines = {content:null};
	$http.get('media/json/redlines.json')
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
controllers.inprogressController = function ($scope, redlinesFactory) {
	$scope.redlines = [];
	init();
	function init() {
		$scope.redlines = redlinesFactory.getRedlines();
	}
	// display redline description in table when row is clicked
	$scope.selectRedline = function(redline) {
		$scope.selectedRedline = redline;
	};
	$scope.isSelected = function(redline) {
		return $scope.selectedRedline === redline;
	};
	// highlight parent row if redline is selected
	$scope.getClass = function(ind) {
		if( ind === $scope.selectedRedline ){
            return "success";
        } else{
            return "";
        }
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
controllers.pendingController = function ($scope, redlinesFactory) {
	$scope.redlines = [];
	init();
	function init() {
		$scope.redlines = redlinesFactory.getRedlines();
	}
	
	// display redline description in table when row is clicked
	$scope.selectRedline = function(redline) {
		$scope.selectedRedline = redline;
	};
	$scope.isSelected = function(redline) {
		return $scope.selectedRedline === redline;
	};
	// highlight parent row if redline is selected
	$scope.getClass = function(ind) {
		if( ind === $scope.selectedRedline ){
            return "success";
        } else{
            return "";
        }
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
controllers.closedController = function ($scope, redlinesFactory) {
	$scope.redlines = [];
	init();
	function init() {
		$scope.redlines = redlinesFactory.getRedlines();
	}
	
	// display redline description in table when row is clicked
	$scope.selectRedline = function(redline) {
		$scope.selectedRedline = redline;
	};
	$scope.isSelected = function(redline) {
		return $scope.selectedRedline === redline;
	};
	// highlight parent row if redline is selected
	$scope.getClass = function(ind) {
		if( ind === $scope.selectedRedline ){
            return "success";
        } else{
            return "";
        }
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