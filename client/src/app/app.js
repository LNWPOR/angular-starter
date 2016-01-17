// uncomment this to use requireJS in Typescritpt
// declare function require(id: string): any; // declare there will be 'require' function in the runtime

import '../styles/main.scss';
var $ = require('jquery');
require('angular');
require('angular-ui-router');
require('angular-resource');

angular.module('app', [
	'ui.router',
	'ngResource'
]);


require('./route.js');

//controllers
require('./main/main.controller.js');

//services
require('./restaurantLists/restaurantLists.services.js');