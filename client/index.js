// style
require('./scss/main.scss');

// libs
var $ = require('jquery');
require('angular');
require('angular-ui-router');
require('angular-resource');

// app
angular.module('app', [
	'ui.router',
	'ngResource'
]);

// route
require('./route.js');

// controllers
require('./app/app.controller.js');
require('./app/home/home.controller.js');

// services
require('./app/restaurantLists/restaurantLists.services.js');