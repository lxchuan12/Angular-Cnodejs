var app = angular.module('app', []);
app.controller('appCtrl', function ($scope, $http,$sce) {

   $http({
      url: 'https://cnodejs.org/api/v1/topics',
      cache: true
   }).success(function (response) {
	   //console.log(response.data);
      $scope.lists = response.data;
   });

   $scope.trustAsHtml = function (str) {
      var _str  = angular.element(str);
      var codes = _str.find('pre');
      for(var i = 0; i< codes.length; i++) {
         hljs.highlightBlock(codes[i]);
      }
      var html = _str[0] ? _str[0].innerHTML : null;
      return $sce.trustAsHtml(html);
   };

   $scope.isOpen=false;

   $scope.open = function (model) {
      //console.log(model);
      $scope.isOpen = !$scope.isOpen;
      if($scope.isOpen) {
         $scope.onLoad = true;
         $http({
            url: 'https://cnodejs.org/api/v1/topic/' + model.id,
            cache: true
         }).success(function (response) {
            //console.log(response.data);
            $scope.contents = response.data;
            $scope.onLoad  = false;
         });
      } else {
         $scope.onLoad  = false;
      }
   }

   $scope.return=function(){
      $scope.isOpen = !$scope.isOpen;
   }

   $http({
      url: 'https://cnodejs.org/api/v1/user/alsotang',
      cache: true
   }).success(function (response) {
      //console.log(response.data);
      $scope.user = response.data;
   });
});