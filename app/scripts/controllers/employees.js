'use strict';

angular.module('dbApp')
  .controller('EmployeesCtrl', function ($scope, employeeFactory, $modalProvider, $log) {
    
    $scope.employees = []; // All employees
    $scope.employee; // Employee that is beeing edited

    $scope.init = function(){
        console.log("init");
        $scope.employees = employeeFactory.getEmployees(function(){
    	});
    };

 	$scope.deleteEmployee = function(ID){
    $scope.client = employeeFactory.getEmployee({employeeID: ID}, function(){
        $scope.client = $scope.client[0];
        $scope.client.$remove(function(){
        });
    });
    setTimeout($scope.init(),1000); 
    };

    $scope.createEmployee = function(employee){
    	employee.employeeID = null;
        console.log(employee)
        employeeFactory.createEmployee(employee, function() {

        });
    setTimeout($scope.init(),5000); 
    };

    $scope.updateEmployee = function(employee){
        var modalInstance = $modal.open({
          templateUrl: 'views/editemployee.html',
          controller: 'EditemployeeCtrl',
            resolve: {
                employee: function () {   //sends the employee to the controller
                    return employee;
                }
            }
        });
        console.log('modal opened');
        modalInstance.result.then(function (response) {
      $scope.employee = response;
    }, function () {
      $log.info('Modal dismissed at');
        });
    };


    $scope.init();

  });
