
angular.module('dbApp')
  .controller('GroupemployeeCtrl', function ($scope, $modalInstance, groups) {
 	

 	$scope.groups = groups;
 
  	$scope.alter = function (group) {
    	$modalInstance.close(group);
  	};

  	$scope.cancel = function () {
    	$modalInstance.dismiss('cancel');
  	};

  	});
