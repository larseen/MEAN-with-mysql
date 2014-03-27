'use strict';

angular.module('dbApp')
  .controller('appointmentStatus', function ($scope, $modalInstance, appointment) {
   

   $scope.appointment = appointment;
   $scope.participants = appointment.participants;
   $scope.creator = appointment.employeeID;
   $scope.numberOfParticipants;

   $scope.init = function() {
      console.log($scope.appointment);  
      console.log($scope.creator); 
      console.log($scope.participants);
      $scope.getNumberOfParticipants();
      console.log($scope.numberOfParticipants);
   };
   

  $scope.getNumberOfParticipants = function(){
    var lenght = 0;
    for (var i = $scope.participants.length - 1; i >= 0; i--) {
      lenght += 1;
    };
    $scope.numberOfParticipants = lenght;
  }

  $scope.alter = function () {
  	console.log($scope.appointment);
    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

  $scope.init();


  });
