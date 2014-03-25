'use strict';

angular.module('dbApp')
  .controller('GroupsCtrl', function ($scope, groupFactory, $modal) {
    

    $scope.groups = []; // All groups
    $scope.group; // group that is beeing edited

    $scope.init = function(){
        console.log("init");
        $scope.groups = groupFactory.getGroups(function(){
        });
    };

    $scope.deleteGroup = function(ID){
    $scope.group = groupFactory.getGroup({groupID: ID}, function(){
        $scope.group = $scope.group[0];
        $scope.group.$remove(function(){
        });
    });
    setTimeout($scope.init(),5000);
    };

    $scope.createGroup = function(group){
    	group.groupID = null;
        console.log(group)
        groupFactory.createGroup(group, function() {

        });
    setTimeout($scope.init(),5000);
    };

    $scope.editGroup = function(group){
        console.log(group)
        groupFactory.editGroup(group, function() {

        });
    setTimeout($scope.init(),5000);
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

    setTimeout($scope.init(),5000);


  });
