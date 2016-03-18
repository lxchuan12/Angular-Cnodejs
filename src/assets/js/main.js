(function(angular) {
  'use strict';
angular.module('cnodejsapp', ['ngRoute', 'ngAnimate'])
  .config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
      $routeProvider
        .when('/test', {
          templateUrl: 'test.html',
          controller: 'testCtrl'
        })
        .when('/user', {
          templateUrl: 'user.html',
          controller: 'userCtrl'
        });

      $locationProvider.html5Mode(true);
  }])
  .controller('MainCtrl', ['$route', '$routeParams', '$location',function($route, $routeParams, $location) {
         this.$route = $route;
         this.$location = $location;
         this.$routeParams = $routeParams;
  }])
  .controller('testCtrl', ['$routeParams', function($route, $routeParams, $location) {
         $scope.message="test";
  }])
  .controller('userCtrl', ['$routeParams', function($route, $routeParams, $location) {
       this.name = "userCtrl";
       this.params = $routeParams;
  }]);
})(window.angular);