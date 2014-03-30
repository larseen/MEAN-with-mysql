'use strict';

angular.module('dbApp')
  .controller('EmployeesCtrl', function ($scope, employeeFactory, $modal, $log, groupFactory, $timeout) {
    
    $scope.employees = []; // All employees
    $scope.employee; // Employee that is beeing edited
    $scope.groups = [] // All groups

    $scope.init = function(){
        $scope.getEmployees(); 
        $scope.getGroups(); 
        console.log("init");
        $timeout( function(){
            $scope.employees = $scope.processEmployees();
            console.log($scope.employees);
        },140);
    };

    $scope.getEmployees = function(){
        employeeFactory.getEmployees(
            function(successResponse) {
            $scope.employees = successResponse;
            console.log(successResponse);
        }, 
        function(errorResponse) {
            console.log(errorResponse);
        });
    }

    $scope.getGroups = function(){
        groupFactory.getGroups(
            function(successResponse) {
            $scope.groups = successResponse;
            console.log(successResponse);
        }, 
        function(errorResponse) {
            console.log(errorResponse);
        });
    }

    $scope.processEmployees = function(){
        var employees = []
        var tempID = []
        for (var i = $scope.employees.length - 1; i >= 0; i--) {
            if(tempID.indexOf($scope.employees[i].employeeID)>0){
                var temp = {name: $scope.employees[i].name, groupID: $scope.employees[i].groupID};
                for (var t = employees.length - 1; t >= 0; t--) {
                    if(employees[t].employeeID==$scope.employees[i].employeeID){
                        employees[t].groups.push(temp);       
                    };
                };
            }else{
            var temp = {name: $scope.employees[i].name, groupID: $scope.employees[i].groupID};
            delete $scope.employees[i].name;
            $scope.employees[i].groups = [];
            $scope.employees[i].groups.push(temp);
            tempID.push($scope.employees[i].employeeID);
            employees.push($scope.employees[i]);
            ;
            }   
        };
        return employees;
    }

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


    $scope.checkInvites = function(employeeID){
        console.log(employeeID);
        var modalInstance = $modal.open({
          templateUrl: 'views/checkinvites.html',
          controller: 'CheckinvitesCtrl',
            resolve: {
                employeeID: function () {   //sends the employee to the controller
                    return employeeID;
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
