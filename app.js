/*
1: Define Global App variable
2: Set dependencies. NG Route and NG Ressource will be used by the App

My app will have 2 Pages:
  - serach for the city
  - show the weather for the current city
3: Define Routes to the 2 different pages and 2 Controllers
   Routs will route the views and controllers together
4: Tell the view, that i will use a singe page application
    <div ng-view></div>
5: Use ng-ressouce to get weather out of internet
6: device Controllers
7: Define html Pages
*/
var static = require('node-static');
var file = new static.Server();
require('http').createServer(function(request, response) {
  request.addListener('end', function() {
    file.serve(request, response);
  }).resume();
}).listen(process.env.PORT || 3000);
//Module
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);
