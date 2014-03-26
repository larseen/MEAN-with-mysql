'use strict';

angular.module('dbApp').factory('employeeFactory', function($resource) {
        
    return $resource('employees/:employeeID/:groupID',
        { 
            employeeID:   '@employeeID',
            groupID:   '@groupID',
        }, 
        {
            'editEmployee'		: {
             	method		: 'POST',
                isArray     : false,
                params      : {employeeID: '@employeeID'} 
            },
            'getEmployee'	: {
             	method		: 'GET',
             	isArray		: true,
             	 params		: {employeeID: '@employeeID'}
            },
            'getEmployees'  : {
            	method		: 'GET',
            	isArray		: true
            },
            'createEmployee': {
            	method		: 'POST',
            	isArray		: false,
                params      : {}
            },
            'groupEmployee': {
                method      : 'POST',
                isArray     : false,
                params      : {employeeID: '@employeeID', groupID: '@groupID'}
            },
            'removeGroup': {
                method      : 'GET',
                isArray     : false,
                params      : {employeeID: '@employeeID', groupID: '@groupID'}
            }
        }
    );
    });

