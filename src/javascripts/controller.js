
// prevent FORM from submitting to server
const element = document.getElementById('mainForm') || null;

if (element !== null || undefined) {
    element.addEventListener('submit', event => {
      event.preventDefault();
      // console.log('submit prevented.');
    });
}

//get urlHash
var urlHash = decodeURI( location.hash.replace(/^#/, '').trim() ).toLowerCase();







// angular web app
var app = angular.module('caseStudies', []);

app.controller('StudiesController', ['$scope', '$sce', '$http', function($scope, $sce, $http) {

    $scope.allData = allData;
    angular.forEach($scope.allData, function(item,index){
       item['studyURL'] = $sce.trustAsHtml(item['studyURL']);

       item['EFSustainabilityA'] = item['EFSustainabilityA'].replace(/,\s*$/, "");
       item['themes'] = item['themes'].replace(/,\s*$/, "");
    });
    // console.log(allData);

	// $http.get('js/studies-data.json')
	// 	.then(function(res){
	// 		$scope.allData = res.data;
	// 	});



	$scope.clearFilter = function() {
		// $scope.search.$ = '';
        if (typeof $scope.search == 'object') {
            $scope.search.themes = '';
            $scope.search.yrLevel = '';
            $scope.search.progress = '';
            $scope.search.EFSustainabilityA = '';
        }

	};


    // Search for words in urlhash
    const searchElement = document.querySelectorAll('.searchcontrol > input') || null;
    // console.log(searchElement);
    const searchInput = document.querySelector('.searchcontrol > input') || null;
    // console.log(searchInput);

    if (searchElement != null) {
        // console.log('search element not null');
        // searchInput.setAttribute('value', 'biodiversity');
        // console.log(urlHash);
        $scope.search = {$: urlHash};
        // console.log($scope.search);
    }


    // if ($scope.search.$.length > 0) {
    //     console.log('length is greater than 0');
    //     window.location.hash = $scope.search.$;
    // };


    $scope.change = function searchInputChanged() {
        window.location.hash = $scope.search.$;
        // $scope.search.$ = 'test';
    };





}]);



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
   "studyURL": "<li><a href='http://localhost:3000/studies/study1.pdf' target='_blank'>PDF link</a></li><li><a href='https://youtu.be/DeXoACwOT1o?list=RDW5SPhETTgEc' target='_blank'>YouTube link</a></li>",
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
   "studyURL": "<li><a href='http://localhost:3000/studies/case-study-2.pdf' target='_blank'>Casestudy link</a></li><li><a href='http://localhost:3000/studies/case-study-2.pdf' target='_blank'>Casestudy link</a></li><li><a href='http://localhost:3000/studies/case-study-2.pdf' target='_blank'>Casestudy link</a></li>",
   "imageURL": "//localhost:3000/images/horsnell-scrub-view.jpg"
 }];



// Rewrite paths fix for SeamlessCMS's poor URL handling in templates
allData.forEach(function(part, index, theArray) {

    var study = theArray[index];

    // regex replaces empty url with default image
    study.imageURL = study.imageURL.replace(/^\?w=[0-9]{1,3}/gi, '/files/sharedassets/adelaide_and_mt_lofty_ranges/images/education/case_study_thumbnails/noimage2.svg');
    // regex replaces "http://" and "//"
    study.imageURL = study.imageURL.replace(/https:\/\/|http:\/\/|\/\/|/gi, '');
    study.imageURL = study.imageURL.replace(/\/files\/sharedassets/gi, 'www.environment.sa.gov.au/files/sharedassets');

    // if multiple urls
//    $scope.thisStudyURL = $sce.trustAsHtml(study.studyURL);
    // var myvar = study.studyURL.split(',');
    // console.log(myvar);

    // // regex replaces "http://" and "//"
    // study.studyURL = study.studyURL.replace(/https:\/\/|http:\/\/|\/\/|/gi, '');
    // study.studyURL = study.studyURL.replace(/\/files\/sharedassets/gi, 'www.environment.sa.gov.au/files/sharedassets');

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
