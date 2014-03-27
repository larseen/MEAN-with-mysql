'use strict';

angular.module('dbApp')
  .controller('CreateappointmentCtrl', function ($scope, employeeFactory, roomFactory, groupFactory, appointmentFactory, $timeout, groupEmployeeFactory) {
  
    $scope.employees = [];
    $scope.rooms = [];
    $scope.groups = [];
    $scope.appointmentID;
    $scope.employeeIDs = [];
    $scope.employeeID = [];

    $scope.init = function(){
        $scope.employees = employeeFactory.getEmployees(function(){
    	});
    	$scope.rooms = roomFactory.getRooms(function(){
    	});
        $scope.groups = groupFactory.getGroups(function(){
        });
        $scope.employeesInAppointment = []
    };

    $scope.toDatabase = function(app){
        app.appointmentID = null;
        console.log(app);
        appointmentFactory.createAppointment(app, function() {

        });
        $timeout( function(){
            $scope.init();
        },200);
    };


    $scope.getLatestID = function() {
            appointmentFactory.getLatestID(
                function(successResponse) {
                    console.log(successResponse);
                    $scope.appointmentID = successResponse.id;
                }, 
                function(errorResponse) {
                    console.log(errorResponse);
                }
            );
    };

    $scope.getEmployeeIDs = function(ID) {
        console.log(ID);
        groupEmployeeFactory.getEmployeeIDs({groupIDs: ID},
            function(successResponse) {
                console.log(successResponse);
                $scope.employeeIDs = successResponse;
            }, 
            function(errorResponse) {
                console.log(errorResponse);
            }
        );
    };



    $scope.createdBy = function(creatorID) {
        var creator = {}
        creator.appointmentID = $scope.appointmentID;
        creator.employeeID = creatorID;
        appointmentFactory.createdBy(creator, function() {
        });
    }

    $scope.inviteParticipants = function(){
        console.log($scope.appointmentID);
        console.log($scope.employeesInAppointment);
        for (var employee in $scope.employeesInAppointment){
            var temp = {};
            temp.employeeID = $scope.employeesInAppointment[employee];
            temp.appointmentID = $scope.appointmentID;
            temp.alertID = null;
            console.log(temp);
            employeeFactory.inviteEmployee(temp, function(){});
        }
        $timeout(function() {
            $scope.init();    
        }, 50);
    };

    $scope.getEmployeesFromGroup = function(groups){
        var groupIDs = [];
        if(groups.lenght!=0){
            for (var i = groups.length - 1; i >= 0; i--) {
                console.log(groups[i].groupID);
                groupIDs.push(groups[i].groupID);
            };
        $scope.getEmployeeIDs(groupIDs);
        }
    }


    $scope.getEmployees = function(usernames){
        var temp = [];
        console.log(usernames);
        if(usernames.lenght!=0){
            for (var i = usernames.length - 1; i >= 0; i--) {
                console.log(usernames[i].employeeID);
                temp.push(usernames[i].employeeID);
            };
        return temp;
        }
    }

    $scope.unique = function(b) {
        for (var c = [], d = {}, a = 0; a < b.length; a++) {
            d[b[a]] || (c.push(b[a]), d[b[a]] = !0);
        }
    return c;
    }

    $scope.createAppointment = function(appointment){
        var app = {};
        app.bookedID = appointment.room.roomID;
        app.starttime = Date.parse(appointment.starttime);
        app.endtime = Date.parse(appointment.endtime);
        app.desc = appointment.desc;
        $scope.toDatabase(app);
        $timeout(function() {
            $scope.getLatestID();
            $scope.employeeID = $scope.getEmployees(appointment.usernames);
            $scope.getEmployeesFromGroup(appointment.groups);   
        }, 50);
        $timeout( function(){
            $scope.employeeIDs = $scope.getEmployees($scope.employeeIDs);
            $scope.employeesInAppointment = $scope.employeeIDs.concat($scope.employeeID);
            $scope.employeesInAppointment = $scope.unique($scope.employeesInAppointment);
            $scope.createdBy(appointment.creator.employeeID);
            $scope.inviteParticipants();
        },100);
    };



    $scope.init();


  });
