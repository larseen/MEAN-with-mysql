'use strict';

angular.module('dbApp')
  .controller('CheckinvitesCtrl', function ($scope, employeeID, $modalInstance, participantsFactory, employeeFactory) {
    
    $scope.employeeID = employeeID
    $scope.status;
    $scope.appointments;
    $scope.employee;

    $scope.init = function() {
    	console.log($scope.employeeID);
    	$scope.getAppointments();
    	$scope.getEmployee();
    };

    $scope.getAppointments = function() {
        participantsFactory.getInvitesByID({employeeID: $scope.employeeID},
            function(successResponse) {
                $scope.appointments = successResponse;
            }, 
            function(errorResponse) {
                console.log(errorResponse);
            }
        );
    }

	$scope.getEmployee = function() {
        employeeFactory.getEmployee({employeeID: $scope.employeeID},
            function(successResponse) {
            	console.log(successResponse);
                $scope.employee = successResponse;
            }, 
            function(errorResponse) {
                console.log(errorResponse);
            }
        );
    }

    $scope.init();

  });
