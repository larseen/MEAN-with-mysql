'use strict';

angular.module('dbApp')
  .controller('CreateappointmentCtrl', function ($scope, employeeFactory, roomFactory, groupFactory, appointmentFactory, $timeout) {
  
    $scope.employees = [];
    $scope.rooms = [];
    $scope.groups = [];

    $scope.init = function(){
        $scope.employees = employeeFactory.getEmployees(function(){
    	});
    	$scope.rooms = roomFactory.getRooms(function(){
    	});
        $scope.groups = groupFactory.getGroups(function(){
        });
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
        return appointmentFactory.getLatestID(function() {});
    }

    $scope.createdBy = function(creatorID) {
        var appointmentID = $scope.getLatestID();
        console.log(creatorID);
    }

    $scope.inviteParticipants = function(employees){
        var appointmentID = $scope.getLatestID();
        console.log(appointmentID);
        if(!employees==null){
            
        };
    };

    $scope.inviteGroups = function(groups){
        var appointmentID = $scope.getLatestID();
        console.log(appointmentID);
        if(!groups==null){

        };
    };

    $scope.createAppointment = function(appointment){
        console.log(appointment);
        var app = {};
        app.date = Date.parse(appointment.date);
        app.bookedID = appointment.room.roomID;
        app.starttime = Date.parse(appointment.starttime);
        app.endtime = Date.parse(appointment.endtime);
        app.desc = appointment.desc;
        console.log(app);
        $scope.toDatabase(app);
        $timeout( function(){
            $scope.createdBy(appointment.creator.employeeID);
            $scope.inviteParticipants(appointment.usernames);
            $scope.inviteGroups(appointment.groups);
            $scope.init();
        },150);
    };



    $scope.init();


  });
