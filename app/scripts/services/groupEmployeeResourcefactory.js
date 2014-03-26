'use strict';

angular.module('dbApp').factory('groupEmployeeFactory', function($resource) {
        
    return $resource('/groupEmployees/:groupIDs',
        { 
            groupIDs: '@groupIDs', 
        },
        { 
           'getEmployeeIDs' : {
            	method		: 'GET',
            	isArray		: true,
        },
    });
    });