'use strict';

angular.module('dbApp')
  .controller('EditemployeeCtrl', function ($scope, $modalInstance, employee) {
   

   $scope.employee = employee;



  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

  });
