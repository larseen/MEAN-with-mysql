'use strict';

angular.module('dbApp')
  .controller('CreateappointmentCtrl', function ($scope, employeeFactory, meetingRoomFactory) {
  
    $scope.employees = [];
    $scope.rooms = [];

    $scope.init = function(){
        $scope.employees = employeeFactory.getEmployees(function(){
    	});
    	$scope.rooms = meetingRoomFactory.getRooms(function(){
    	});
    	console.log($scope.employees);
    	console.log($scope.rooms);
    };

    $scope.init();


  });
