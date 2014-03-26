'use strict';

angular.module('dbApp')
  .controller('AppointmentsCtrl', function ($scope, appointmentFactory, $modal, $log, $timeout) {
    
    $scope.appointments = []; // All appointmnets
    $scope.appointment; // Employee that is beeing edited

    $scope.init = function(){
        $scope.getAppointments();
        console.log("init");
    };

    $scope.getAppointments = function(){
        appointmentFactory.getAppointments(
                function(successResponse) {
                    console.log(successResponse);
                    $scope.appointments = successResponse;
                }, 
                function(errorResponse) {
                    console.log(errorResponse);
                }
            );
    }


    $scope.checkStatus = function(appointment){
        var modalInstance = $modal.open({
          templateUrl: 'views/appointmentModal.html',
          controller: 'appointmentStatus',
            resolve: {
                appointment: function () {   //sends the employee to the controller
                }
            }
        });
        console.log(modalInstance);
        console.log('modal opened');
        modalInstance.result.then(function(){
    }, function () {
      $log.info('Modal dismissed at');
        });
    };

    $scope.init();

  });
