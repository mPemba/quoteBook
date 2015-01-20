var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, dataService){
	$scope.getData = function() {
		$scope.quotes = dataService.getData();
	}

	$scope.getData();


});