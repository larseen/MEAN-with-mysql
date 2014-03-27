'use strict';

angular.module('dbApp')
  .controller('AppointmentsCtrl', function ($scope, appointmentFactory, $modal, $log, $timeout, participantsFactory, employeeFactory) {
    
    $scope.appointments = []; // All appointmnets
    $scope.participants = [];
    $scope.employees = [];

    $scope.init = function(){
        $scope.getAppointments();
        $scope.getInvites();
        $scope.getEmployees();
        $timeout( function(){
            $scope.addEmployeeObjectOnID($scope.appointments,$scope.employees);
            $scope.addEmployeeObjectOnID($scope.participants,$scope.employees);
            $scope.addParticipants();
            console.log("init");
        },50);
    };

    $scope.getAppointments = function(){
        appointmentFactory.getAppointments(
                function(successResponse) {
                    $scope.appointments = successResponse;
                }, 
                function(errorResponse) {
                    console.log(errorResponse);
                }
            );
    }

    $scope.getInvites = function(){
        participantsFactory.getInvites(
                function(successResponse) {
                    $scope.participants = successResponse;
                }, 
                function(errorResponse) {
                    console.log(errorResponse);
                }
            );
    }

    $scope.getEmployees = function(){
        employeeFactory.getEmployees(
                function(successResponse) {
                    $scope.employees = successResponse;
                }, 
                function(errorResponse) {
                    console.log(errorResponse);
                }
            );
    }

    $scope.addEmployeeObjectOnID = function(resourceArray1, resourceArray2){
        for (var i = resourceArray1.length - 1; i >= 0; i--) {
            for (var t = resourceArray2.length - 1; t >= 0; t--) {
                if(resourceArray1[i].employeeID == resourceArray2[t].employeeID){
                    resourceArray1[i].employeeID = resourceArray2[t];
                };
            }; 
        };
    }

    $scope.addParticipants = function(){
        for (var i = $scope.appointments.length - 1; i >= 0; i--) {
            $scope.appointments[i].participants = [];
            for (var t = $scope.participants.length - 1; t >= 0; t--) {
                if($scope.appointments[i].appointmentID == $scope.participants[t].appointmentID){
                    $scope.appointments[i].participants.push($scope.participants[t]);
                };
            }; 
        };
        console.log($scope.appointments);
    }

    $scope.getAppointmentByID = function(ID) {
        for (var i = $scope.appointments.length - 1; i >= 0; i--) {
            if($scope.appointments[i].appointmentID==ID){
                return $scope.appointments[i];
            }
        };
    }

    $scope.checkStatus = function(appointmentID){
        var appointment = $scope.getAppointmentByID(appointmentID);
        var modalInstance = $modal.open({
          templateUrl: 'views/appointmentModal.html',
          controller: 'appointmentStatus',
            resolve: {
                appointment: function () {   //sends the employee to the controller
                    return appointment;
                }
            }
        });
        console.log('modal opened');
        modalInstance.result.then(function( response ){
    }, function () {
      $log.info('Modal dismissed at');
        });
    };

    $scope.init();

  });
