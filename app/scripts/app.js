'use strict';

angular.module('dbApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'ngLocale',
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/rooms', {
        templateUrl: 'views/rooms.html',
        controller: 'roomsControl'
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
      .when('/createAppointment', {
        templateUrl: 'views/createappointment.html',
        controller: 'CreateappointmentCtrl'
      })
      .when('/editEmployee', {
        templateUrl: 'views/editemployee.html',
        controller: 'EditemployeeCtrl'
      })
      .when('/groups', {
        templateUrl: 'views/groups.html',
        controller: 'GroupsCtrl'
      })
      .when('/groupEdit', {
        templateUrl: 'views/groupedit.html',
        controller: 'GroupeditCtrl'
      })
      .when('/groupEmployee', {
        templateUrl: 'views/groupemployee.html',
        controller: 'GroupemployeeCtrl'
      })
      .when('/checkInvites', {
        templateUrl: 'views/checkinvites.html',
        controller: 'CheckinvitesCtrl'
      })
      .when('/checkInvites', {
        templateUrl: 'views/checkinvites.html',
        controller: 'CheckinvitesCtrl'
      })
      .when('/groupInfo', {
        templateUrl: 'views/groupinfo.html',
        controller: 'GroupinfoCtrl'
      })
      .otherwise({
        redirectTo: '/home'
      });
  });
