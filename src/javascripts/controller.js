

var app = angular.module('caseStudies', []);

app.controller('StudiesController', ['$scope', '$http', function($scope, $http) {

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

}]);

// angular.config(function($locationProvider) {
//     $locationProvider.html5Mode({
//         enabled: true,
//         requireBase: false,
//         rewriteLinks: false
//     });
// });

// Comment out below before uploading to website. A DLV will create this.
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
   "studyURL": "http://localhost:3000/studies/study1.pdf",
   "imageURL": "http://localhost:3000/images/pic268x150.png"
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
   "studyURL": "http://localhost:3000/studies/case-study-2.pdf",
   "imageURL": "//localhost:3000/images/horsnell-scrub-view.jpg"
 }];



// Rewrite paths fix for SeamlessCMS's poor URL handling in templates
allData.forEach(function(part, index, theArray) {

    var study = theArray[index];

    // regex replaces "http://" and "//"
    study.imageURL = study.imageURL.replace(/https:\/\/|http:\/\/|\/\/|/gi, '');

    // regex replaces "http://" and "//"
    study.studyURL = study.studyURL.replace(/https:\/\/|http:\/\/|\/\/|/gi, '');
    study.studyURL = study.studyURL.replace(/\/files\/sharedassets/gi, 'www.environment.sa.gov.au/files/sharedassets');

});



/* Polyfill for .forEach function. */
// Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: http://es5.github.io/#x15.4.4.18
if (!Array.prototype.forEach) {

  Array.prototype.forEach = function(callback/*, thisArg*/) {

    var T, k;

    if (this == null) {
      throw new TypeError('this is null or not defined');
    }

    // 1. Let O be the result of calling toObject() passing the
    // |this| value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get() internal
    // method of O with the argument "length".
    // 3. Let len be toUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If isCallable(callback) is false, throw a TypeError exception.
    // See: http://es5.github.com/#x9.11
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    // 5. If thisArg was supplied, let T be thisArg; else let
    // T be undefined.
    if (arguments.length > 1) {
      T = arguments[1];
    }

    // 6. Let k be 0
    k = 0;

    // 7. Repeat, while k < len
    while (k < len) {

      var kValue;

      // a. Let Pk be ToString(k).
      //    This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the HasProperty
      //    internal method of O with argument Pk.
      //    This step can be combined with c
      // c. If kPresent is true, then
      if (k in O) {

        // i. Let kValue be the result of calling the Get internal
        // method of O with argument Pk.
        kValue = O[k];

        // ii. Call the Call internal method of callback with T as
        // the this value and argument list containing kValue, k, and O.
        callback.call(T, kValue, k, O);
      }
      // d. Increase k by 1.
      k++;
    }
    // 8. return undefined
  };
}
