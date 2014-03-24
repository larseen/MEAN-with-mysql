'use strict';

angular.module('dbApp')
  .controller('roomsControl', function ($scope, roomFactory, $log) {
    
    $scope.rooms = []; // All rooms
    $scope.room; // Room that is beeing "proccessed"

    $scope.init = function(){
        console.log("init");
        $scope.rooms = roomFactory.getRooms(function(){
    	});
    	console.log($scope.rooms);
    };

 	$scope.deleteRoom = function(ID){
    $scope.room = roomFactory.getRoom({roomID: ID}, function(){
        $scope.room = $scope.room[0];
        console.log($scope.room);
        $scope.room.$remove(function(){
        });
    });
    setTimeout($scope.init(),1000); 
    };

    $scope.createRoom = function(room){
    	room.roomID = null;
    	room.free = 1;
        console.log(room)
        roomFactory.createRoom(room, function() {

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