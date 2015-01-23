var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, dataService){

  $scope.quotes = dataService.getData();

  $scope.addQuote = function() {
  	var quoteObject = {
  		text: $scope.newQuote,
  		author: $scope.newAuthor
  	};
  	dataService.addData(quoteObject);
  	$scope.newQuote = '';
  	$scope.newAuthor = '';
  };

  $scope.removeQuote = function() {
  	dataService.removeData($scope.deleteQuote);
    $scope.deleteQuote = '';
  }
  
  $scope.toggle = function(str) {
  	$scope.focus = str;
  }
  
});