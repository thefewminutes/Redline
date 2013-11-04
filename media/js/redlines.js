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
		.when('/search',
			{
				controller: 'searchController',
				templateUrl: 'partials/search.html'
			})
		.when('/newredline',
			{
				controller: 'newredlineController',
				templateUrl: 'partials/requestform.html'
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

// get all the plans
redlineApp.factory('plansFactory', function($http) {
	var plans = {content:null};
	$http.get('media/json/plans.json')
		.success(function(data) {
			plans.content = data;
	})
		.error(function(data) {
			alert('could not get data');
	});
	var factory = {};
	factory.getPlans = function() {
		return plans;
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
	
	// sorting
	$scope.sortField = undefined;
	$scope.reverse = false;
	$scope.sort = function (fieldName) { 
		if ($scope.sortField === fieldName) { 
			$scope.reverse = !$scope.reverse; 
		} else { 
			$scope.sortField = fieldName; 
			$scope.reverse = false;
		}
	};
	
	// sorting visual indicators
	$scope.isSortUp = function (fieldName) {
		return $scope.sortField === fieldName && !$scope.reverse;
	};
	$scope.isSortDown = function (fieldName) {
		return $scope.sortField === fieldName && $scope.reverse;
	};
	
	//pagination
	$scope.pageSize = 10; // number of records to display in table
	$scope.pages = [];
	$scope.$watch('filteredRedlines.length', function(filteredSize){
		$scope.pages.length = 0;
		var noOfPages = Math.ceil(filteredSize / $scope.pageSize);
		for (var i=0; i<noOfPages; i++) {
			$scope.pages.push(i);
		}
	});
	
	$scope.pageNo = 0;
	$scope.setActivePage = function (pageNo) {
		if (pageNo >=0 && pageNo < $scope.pages.length) {
			$scope.pageNo = pageNo;
		}
	};
 
	// delete
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
	
	// sorting
	$scope.sortField = undefined;
	$scope.reverse = false;
	
	$scope.sort = function (fieldName) { 
		if ($scope.sortField === fieldName) { 
			$scope.reverse = !$scope.reverse; 
		} else { 
			$scope.sortField = fieldName; 
			$scope.reverse = false;
		}
	};
	
	// sorting visual indicators
	$scope.isSortUp = function (fieldName) {
		return $scope.sortField === fieldName && !$scope.reverse;
	};
	$scope.isSortDown = function (fieldName) {
		return $scope.sortField === fieldName && $scope.reverse;
	};
	
	//pagination
	$scope.pageSize = 10; // number of records to display in table
	$scope.pages = [];
	$scope.$watch('filteredRedlines.length', function(filteredSize){
		$scope.pages.length = 0;
		var noOfPages = Math.ceil(filteredSize / $scope.pageSize);
		for (var i=0; i<noOfPages; i++) {
			$scope.pages.push(i);
		}
	});
	
	$scope.pageNo = 0;
	$scope.setActivePage = function (pageNo) {
		if (pageNo >=0 && pageNo < $scope.pages.length) {
			$scope.pageNo = pageNo;
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
	
	// sorting
	$scope.sortField = undefined;
	$scope.reverse = false;
	
	$scope.sort = function (fieldName) { 
		if ($scope.sortField === fieldName) { 
			$scope.reverse = !$scope.reverse; 
		} else { 
			$scope.sortField = fieldName; 
			$scope.reverse = false;
		}
	};
	
	// sorting visual indicators
	$scope.isSortUp = function (fieldName) {
		return $scope.sortField === fieldName && !$scope.reverse;
	};
	$scope.isSortDown = function (fieldName) {
		return $scope.sortField === fieldName && $scope.reverse;
	};
	
	//pagination
	$scope.pageSize = 10; // number of records to display in table
	$scope.pages = [];
	$scope.$watch('filteredRedlines.length', function(filteredSize){
		$scope.pages.length = 0;
		var noOfPages = Math.ceil(filteredSize / $scope.pageSize);
		for (var i=0; i<noOfPages; i++) {
			$scope.pages.push(i);
		}
	});
	
	$scope.pageNo = 0;
	$scope.setActivePage = function (pageNo) {
		if (pageNo >=0 && pageNo < $scope.pages.length) {
			$scope.pageNo = pageNo;
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

// search page controller
controllers.searchController = function ($scope, plansFactory) {
	$scope.plans = [];
	init();
	function init() {
		$scope.plans = plansFactory.getPlans();
	}
	
		// sorting
	$scope.sortField = undefined;
	$scope.reverse = false;
	
	$scope.sort = function (fieldName) { 
		if ($scope.sortField === fieldName) { 
			$scope.reverse = !$scope.reverse; 
		} else { 
			$scope.sortField = fieldName; 
			$scope.reverse = false;
		}
	};
	
	// sorting visual indicators
	$scope.isSortUp = function (fieldName) {
		return $scope.sortField === fieldName && !$scope.reverse;
	};
	$scope.isSortDown = function (fieldName) {
		return $scope.sortField === fieldName && $scope.reverse;
	};
	
		//pagination
	$scope.pageSize = 10; // number of records to display in table
	$scope.pages = [];
	$scope.$watch('filteredPlans.length', function(filteredSize){
		$scope.pages.length = 0;
		var noOfPages = Math.ceil(filteredSize / $scope.pageSize);
		for (var i=0; i<noOfPages; i++) {
			$scope.pages.push(i);
		}
	});
	
	$scope.pageNo = 0;
	$scope.setActivePage = function (pageNo) {
		if (pageNo >=0 && pageNo < $scope.pages.length) {
			$scope.pageNo = pageNo;
		}
	};
	
};

// new redline controller
controllers.newredlineController = function ($scope) {
	
};

redlineApp.controller(controllers);

// pagination filter
redlineApp.filter('pagination', function(){
	return function(inputArray, selectedPage, pageSize) {
		var start = selectedPage*pageSize;
		return inputArray.slice(start, start + pageSize);
	};
});