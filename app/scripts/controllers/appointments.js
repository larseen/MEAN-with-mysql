'use strict';

angular.module('dbApp')
  .controller('AppointmentsCtrl', function ($scope, appointmentFactory) {
    
    $scope.appointments = []; // All appointmnets
    $scope.appointment; // Employee that is beeing edited

    $scope.init = function(){
        console.log("init");
        $scope.appointments = appointmentFactory.getAppointments(function(){
    	});
    	console.log($scope.appointments);
    };

    $scope.init();

  });
