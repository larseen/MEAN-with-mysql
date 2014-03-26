'use strict';

angular.module('dbApp').factory('appointmentFactory', function($resource) {
        
    return $resource('appointments/:appointmentID/:latest/:employeeID',
        { 
            appointmentID:   '@appointmentID',
            latest:          '@latest',
            employeeID:      '@employeeID',
        }, 
        {
            'update'		: {
             	method		: 'PUT'
            },
            'getAppointment'	: {
             	method		: 'GET',
             	isArray		: true,
             	 params		: {appointmentID: '@appointmentID'}
            },
            'getAppointments'  : {
            	method		: 'GET',
            	isArray		: true
            },
            'createAppointment': {
            	method		: 'POST',
            	isArray		: false,
                params      : {}
            },
            'createdBy': {
                method      : 'GET',
                isArray     : false,
                params      : {appointmentID: '@appointmentID', employeeID: '@employeeID'}
            },
            'getLatestID': {
                method      : 'POST',
                isArray     : false,
                params      : {latest: 'latest'}
            }
        }
    );

    });