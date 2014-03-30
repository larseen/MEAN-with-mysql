'use strict';

angular.module('dbApp')
  .controller('GroupsCtrl', function ($scope, groupFactory, $modal, $timeout, $log) {
    

    $scope.groups = []; // All groups
    $scope.group; // group that is beeing edited

    $scope.init = function(){
        console.log("init");
        $scope.getGroups();
        $timeout( function(){
            $scope.groups = $scope.processGroups();
            console.log($scope.groups);
        },150);

    };


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

    $scope.deleteGroup = function(ID){
    $scope.group = groupFactory.getGroup({groupID: ID}, function(){
        $scope.group = $scope.group[0];
        $scope.group.$remove(function(){
        });
    });
    $timeout( function(){
            $scope.init()
        },50);
    };

    $scope.createGroup = function(group){
    	group.groupID = null;
        console.log(group)
        groupFactory.createGroup(group, function() {
        });
    $timeout( function(){
            $scope.init()
        },50);
    };

    $scope.editGroup = function(group){
        console.log(group)
        groupFactory.editGroup(group, function() {
        });
    $timeout( function(){
            $scope.init()
        },50);
    };

    $scope.updateGroup = function(group){
        var modalInstance = $modal.open({
          templateUrl: 'views/groupEdit.html',
          controller: 'GroupeditCtrl',
            resolve: {
                group: function () {   //sends the group to the controller
                    return group;
                }
            }
        });
        console.log(modalInstance);
        console.log('modal opened');
        modalInstance.result.then(function (response) {
        $scope.editGroup(response);
    }, function () {
      $log.info('Modal dismissed at');
        });
    };


    $scope.groupStats = function(group){
        var modalInstance = $modal.open({
          templateUrl: 'views/groupinfo.html',
          controller: 'GroupinfoCtrl',
            resolve: {
                group: function () {   //sends the group to the controller
                    return group;
                }
            }
        });
        console.log(modalInstance);
        console.log('modal opened');
        modalInstance.result.then(function (response) {
        $scope.editGroup(response);
    }, function () {
      $log.info('Modal dismissed at');
        });
    };


    $scope.processGroups = function(){
        var groups = []
        var tempID = []
        for (var i = $scope.groups.length - 1; i >= 0; i--) {
            $scope.groups[i].participants = 0;
            if(tempID.indexOf($scope.groups[i].groupID)>0){
                var temp = {username: $scope.groups[i].username};
                for (var t = groups.length - 1; t >= 0; t--) {
                    if(groups[t].groupID==$scope.groups[i].groupID){
                        groups[t].participants += 1;
                        groups[t].employees.push(temp);       
                    };
                };
            }else{
            if($scope.groups[i].username==null){
                delete $scope.groups[i].username;
                groups.push($scope.groups[i]);
                tempID.push($scope.groups[i].groupID);
            }else{
            $scope.groups[i].participants += 1;
            var temp = {username: $scope.groups[i].username};
            delete $scope.groups[i].username;
            $scope.groups[i].employees = [];
            $scope.groups[i].employees.push(temp);
            tempID.push($scope.groups[i].groupID);
            groups.push($scope.groups[i]);
            }
            ;
            }   
        };
        return groups;
    }

    $scope.init();


  });
