var app = angular.module('caseStudies', []);

app.controller('StudiesController', function($scope, $http) {
	$http.get('js/studies-data.json')
		.then(function(res){
			$scope.allData = res.data;

            // TODO: restrict Search box to title's and schools
            // $scope.search = '';
            // $scope.search.titleandschool = $scope.allData.map(function(study) {
            //     return {
            //         title: study.title,
            //         schools: study.schools
            //     }
            // });

		});



	$scope.clearFilter = function() {
		// $scope.search.$ = '';
        if (typeof $scope.search == "object") {
            $scope.search.themes = '';
            $scope.search.yrLevel = '';
            $scope.search.progress = '';
            $scope.search.EFSustainabilityA = '';
        }

	};

});
