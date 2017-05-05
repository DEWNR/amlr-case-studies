var app = angular.module('caseStudies', []);

app.controller('StudiesController', function($scope, $http) {

    $scope.allData = allData;

	// $http.get('js/studies-data.json')
	// 	.then(function(res){
	// 		$scope.allData = res.data;
	// 	});



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


var allData = [
 {
   "title": "Ecological Conversion: An Education for Sustainability Learning Story",
   "schools": "All Saints Catholic Primary School",
   "yrLevel": "Primary school",
   "progress": "Committing",
   "EFSustainabilityA": "Curriculum and learning, Vision and values, Whole site approach",
   "themes": "Biodiversity, Food garden",
   "date": 2014,
   "author": "Jeremy",
   "studyURL": "studies/study1.pdf",
   "imageURL": "images/pic268x150.png"
 },
 {
   "title": "An Education for Sustainability learning story from Allenby Gardens Primary School",
   "schools": "Allenby Gardens Primary School",
   "yrLevel": "Primary school",
   "progress": "Challenging",
   "EFSustainabilityA": "Curriculum and learning, ",
   "themes": "Food garden",
   "date": 2015,
   "author": "Amy?",
   "studyURL": "studies/case-study-2.pdf",
   "imageURL": "//localhost:3002/images/horsnell-scrub-view.jpg"
 }];
