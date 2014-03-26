'use strict';

angular.module('dbApp')
  .controller('EmployeesCtrl', function ($scope, employeeFactory, $modal, $log, groupFactory, $timeout) {
    
    $scope.employees = []; // All employees
    $scope.employee; // Employee that is beeing edited
    $scope.groups = [] // All groups

    $scope.init = function(){
        console.log("init");
        $scope.employees = employeeFactory.getEmployees(function(){
        });
        $scope.groups = groupFactory.getGroups(function(){
        });
    };

 	$scope.deleteEmployee = function(ID){
    $scope.client = employeeFactory.getEmployee({employeeID: ID}, function(){
        $scope.client = $scope.client[0];
        $scope.client.$remove(function(){
            });
        });
        $timeout( function(){
            $scope.init()
        },200);
    };


    $scope.removeGroup = function(employee){
        var req = {}
        req.groupID = employee.groupID;
        req.employeeID = employee.employeeID;
        employeeFactory.removeGroup(req, function(){
        });
        $timeout( function(){
            $scope.init()
        },100);
    };

    $scope.createEmployee = function(employee){
    	employee.employeeID = null;
        console.log(employee)
        employeeFactory.createEmployee(employee, function() {

        });
        $timeout( function(){
            $scope.init()
        },100);
    };

    $scope.editEmployee = function(employee){
        console.log(employee)
        delete employee.groupID;
        delete employee.name;
        employeeFactory.editEmployee(employee, function() {

        });
        $timeout( function(){
            $scope.init()
        },100);
    };

    $scope.groupEmployee = function(groupEmployee){
        console.log(groupEmployee)
        employeeFactory.groupEmployee(groupEmployee, function() {
        });
        $timeout( function(){
            $scope.init()
        },100);
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
        console.log(modalInstance);
        console.log('modal opened');
        modalInstance.result.then(function (response) {
        $scope.editEmployee(response);
    }, function () {
      $log.info('Modal dismissed at');
        });
    };

    $scope.employeeGroup = function(employee){
        var returnObject= {};
        returnObject.employeeID = employee.employeeID;
        var groups = $scope.groups;
        var modalInstance = $modal.open({
          templateUrl: 'views/groupemployee.html',
          controller: 'GroupemployeeCtrl',
            resolve: {
                groups: function () {   //sends the employee to the controller
                    return groups;
                }
            }
        });
        console.log('modal opened');
        modalInstance.result.then(function (response) {
            returnObject.groupID = response.groupID;
            $scope.groupEmployee(returnObject);
    }, function () {
      $log.info('Modal dismissed at');
        });
    };


    $scope.init();

  });
