'use strict';

angular.module('dbApp')
  .controller('GroupeditCtrl', function ($scope, $modalInstance, group) {
 	

 	$scope.group = group;
   	console.log($scope.group);	

  	$scope.alter = function () {
  		console.log($scope.group);
    	$modalInstance.close($scope.group);
  	};

  	$scope.cancel = function () {
    	$modalInstance.dismiss('cancel');
  	};

  	});
