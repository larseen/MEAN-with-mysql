'use strict';

angular.module('dbApp')
  .controller('EmployeesCtrl', function ($scope, employeeFactory) {
    
    $scope.employees = [];

    $scope.init = function(){
        $scope.employees = employeeFactory.getEmployees(function(){
    	});
    };

 	$scope.deleteClient = function(ID){
    $scope.client = testClientApi.getClient({clientID: ID}, function(){
        $scope.client = $scope.client[0];
        $scope.client.$remove(function(){
        	$location.path('/');
        });
    });
    };

    $scope.createClient = function(client){
    	console.log(client)
    	var client = new testClientApi(client);
        client.$save(function(){
            $location.path('/');
        });
    console.log($scope.client);
    };

    $scope.init();

  });
