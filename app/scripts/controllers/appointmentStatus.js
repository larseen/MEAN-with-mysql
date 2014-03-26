'use strict';

angular.module('dbApp')
  .controller('appointmentStatus', function ($scope, $modalInstance, appointment) {
   

   $scope.appointment = appointment;
   console.log($scope.appointment);	

  $scope.alter = function () {
  	console.log($scope.appointment);
    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };


  });
