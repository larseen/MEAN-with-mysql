'use strict';

angular.module('dbApp').factory('employeeFactory', function($resource) {
        
    return $resource('employees/:username',
        {
            username:   '@username',
        }, 
        {
            'update'		: {
             	method		: 'PUT'
            },
            'getEmployee'	: {
             	method		: 'GET',
             	isArray		: true,
             	 params		: {username: '@username'}
            },
            'getEmployees'  : {
            	method		: 'GET',
            	isArray		: true
            },
            'createEmployee': {
            	method		: 'POST',
            	isArray		: false
            }
        }
    );
    });