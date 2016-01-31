angular.module('app')
.controller('MainController', ['$scope','RestaurantListsServices',function($scope,RestaurantListsServices){
	console.log('test');
	console.log(RestaurantListsServices.getRestaurantLists());
	$scope.username = 'World';
	$scope.res = RestaurantListsServices.getRestaurantLists();

	var img1 = document.getElementById("test1");
	img1.src = require("../../images/newicon2.jpg");
}]);	
