'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','View1Svc','$timeout',function($scope,View1Svc,$timeout) {
	$scope.updateWords = function(words) {
	$timeout(function() {
      View1Svc.postData(words);
   }, 3000);
  console.log('textarea',textarea);
  var textarea = document.getElementById('textarea1');
  if (textarea.value.length > 5){
        textarea.cols = 50;
        textarea.rows = 50;
      }  else{
         textarea.cols = 10;
         textarea.rows = 15;
      }

};
}])

.service('View1Svc',['$rootScope','$http',function($rootScope,$http){
 this.postData = function(words) {
 	var object = {
 		text:words
 	}
 	var oldVal;
 	var newVal;

    $http({
        method: 'POST',
        url: '/',
        data:JSON.stringify(object),
        headers: {
		   'Content-Type':"application/json"
		 },
     }).success(function(data){
     		$rootScope.tableData = data.length;
        $rootScope.tableData2 = data.wpm;

    }).error(function(){
       console.error('error');
    });
 }
}])
.directive('sort',[function(){

}]);
