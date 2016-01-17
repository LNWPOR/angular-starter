angular.module('app').factory('RestaurantListsServices', ['$resource', function ($resource) {
    var RestaurantListsServices = {};
    var base = "https://hungry-joe-lnwpor-5.c9.io:8080";
    // var base = "http://hungry-joe-server.mybluemix.net";
    var RestaurantLists = $resource(base+'/api/restaurantlists/:restaurant_id', {restaurant_id : '@restaurant_id'});
	var RestaurantListsGres = $resource(base+'/api/restaurantlists/:gres_id', {gres_id : '@gres_id'});
   
    RestaurantListsServices.getRestaurantLists = function(){
        return RestaurantLists.query();
    }

    RestaurantListsServices.getRestaurantByGresID = function(gres_id){
        return RestaurantListsGres.get({gres_id:gres_id});
    }

    RestaurantListsServices.addRestaurant = function(name,gres_id){
    	var restaurant = new RestaurantLists();
    	restaurant.name = name;
    	restaurant.gres_id = gres_id;
    	RestaurantLists.save(restaurant);
    }

    return RestaurantListsServices;
}]);