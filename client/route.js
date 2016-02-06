angular.module('app')
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',function($stateProvider, $urlRouterProvider, $locationProvider) {


  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $stateProvider
  .state('app', {
    url: '/',
    templateUrl: require('./app/app.html'),
    controller: 'AppController'
  })
  .state('app.home', {
    url: '/home',
    templateUrl: require('./app/home/home.html'),
    controller: 'HomeController'
  });

  $urlRouterProvider.otherwise('/home');

}]);