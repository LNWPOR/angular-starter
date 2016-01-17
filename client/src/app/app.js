// uncomment this to use requireJS in Typescritpt
// declare function require(id: string): any; // declare there will be 'require' function in the runtime

import '../styles/main.scss';
var $ = require('jquery');
require('angular');
require('angular-ui-router');

angular.module('app', [
	'ui.router'
]);


require('./route.js');
require('./main/main.controller.js');