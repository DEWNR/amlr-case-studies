var app = angular.module('caseStudies', []);

app.controller('StudiesController', function($scope, $http) {
	$http.get('js/studies-data.json')
		.then(function(res){
			$scope.allData = res.data;
			// $scope.themes = res.data.themes;
			// $scope.yrLevel = res.data.yrLevel;
			// $scope.progress = res.data.progress;
			// $scope.EfSPrinciples = res.data.EfSPrinciples;
			// $scope.clearFilter = false;
		});

	$scope.clearFilter = function() {
		$scope.search.themes = '';
  //   	$scope.allData = res.data;
  //   	$scope.themes = res.data.themes;
		// $scope.yrLevel = res.data.yrLevel;
		// $scope.progress = res.data.progress;
		// $scope.EfSPrinciples = res.data.EfSPrinciples;
	};

	// function clearFilter() {
	// 	console.log('here??');
 //    	$scope.allData = null;
 //    	$scope.themes = res.data.themes;
	// 	$scope.yrLevel = res.data.yrLevel;
	// 	$scope.progress = res.data.progress;
	// 	$scope.EfSPrinciples = res.data.EfSPrinciples;
	// }

});