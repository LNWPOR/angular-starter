angular.module('app')
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',function($stateProvider, $urlRouterProvider, $locationProvider) {


  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $stateProvider
  .state('main', {
    url: '/',
    templateUrl: require('./main/main.html'),
    controller: 'main.controller as MainCtrl'
  });

  $urlRouterProvider.otherwise('/');

}]);