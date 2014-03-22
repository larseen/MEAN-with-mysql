'use strict';

angular.module('dbApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/database', {
        templateUrl: 'views/database.html',
        controller: 'DatabaseCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
