'use strict';

angular.module('dbApp')
  .controller('GroupinfoCtrl', function ($scope, $modalInstance, group, $log) {
    
    $scope.group = group
    console.log(group);
  });
