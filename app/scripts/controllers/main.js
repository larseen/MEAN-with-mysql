'use strict';

angular.module('dbApp')
  .controller('MainCtrl', function ($scope, $location, $resource, $modal, $filter, $routeParams, testClientApi) {
    
    $scope.clients = [];

    $scope.init = function(){
        $scope.clients = testClientApi.query(function(){
    	});
    };

 	$scope.deleteClient = function(ID){
        $scope.client = testClientApi.getClient({clientID: ID}, function(){
            $scope.client = $scope.client[0];
            $scope.client.$remove(function(){
            	$location.path('/');
            });
        });
    };

    $scope.createClient = function(client){
    	console.log(client)
    	var client = new testClientApi(client);
        client.$save(function(){
            $location.path('/');
        });
    console.log($scope.client);
    };

    $scope.openModal = function(client){
    var modalInstance = $modal.open({
        templateUrl: 'views/clienteditview.html',
        controller: 'ClienteditviewCtrl',
        resolve: {
            client: function () {   //sends the product to the controller
                return client;
            }
        }
    });
    };

    $scope.init();

  });
