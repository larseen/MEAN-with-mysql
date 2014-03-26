'use strict';

angular.module('dbApp').factory('employeeFactory', function($resource) {
        
    return $resource('employees/:employeeID/:groupID/:appointmentID/:status',
        { 
            employeeID:   '@employeeID',
            groupID:      '@groupID',
            appointmentID:'@appointmentID',
            status:'@status',
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
            'getEmployeeIDs'  : {
                method      : 'GET',
                isArray     : true,
                params      : {employeeID: 'employeeIDs'}
            },
            'inviteEmployee': {
                method      : 'POST',
                isArray     : false,
                params      : {employeeID: '@employeeID', appointmentID: '@appointmentID', status: 'status'}
            },
            'removeGroup': {
                method      : 'GET',
                isArray     : false,
                params      : {employeeID: '@employeeID', groupID: '@groupID'}
            }
        }
    );
    });

