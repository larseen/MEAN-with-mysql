'use strict';

angular.module('dbApp')
  .controller('EditemployeeCtrl', function ($scope, $modalInstance, employee) {
   

   $scope.employee = employee;
   console.log($scope.employee);	

  $scope.alter = function () {
  	console.log($scope.employee);
    $modalInstance.close($scope.employee);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };


  });
