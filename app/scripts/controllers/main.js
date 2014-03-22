'use strict';

angular.module('dbApp')
  .controller('MainCtrl', function ($scope, $location, $filter, testClientApi) {
    
    $scope.clients = [];

    $scope.init = function(){
        $scope.clients = testClientApi.query(function(){
        });
    };

    $scope.init();

  });
