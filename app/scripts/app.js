'use strict';

angular.module('dbApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'ngLocale'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/clientEditView', {
        templateUrl: 'views/clienteditview.html',
        controller: 'ClienteditviewCtrl'
      })
      .when('/database', {
        templateUrl: 'views/database.html',
        controller: 'DatabaseCtrl'
      })
      .when('/meetingrooms', {
        templateUrl: 'views/meetingrooms.html',
        controller: 'MeetingroomsCtrl'
      })
      .when('/appointments', {
        templateUrl: 'views/appointments.html',
        controller: 'AppointmentsCtrl'
      })
      .when('/employees', {
        templateUrl: 'views/employees.html',
        controller: 'EmployeesCtrl'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .otherwise({
        redirectTo: '/home'
      });
  });
