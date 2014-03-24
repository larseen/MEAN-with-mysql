'use strict';

angular.module('dbApp').factory('employeeFactory', function($resource) {
        
    return $resource('employees/:employeeID',
        { 
            employeeID:   '@employeeID',
        }, 
        {
            'update'		: {
             	method		: 'PUT'
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
            }
        }
    );
    });