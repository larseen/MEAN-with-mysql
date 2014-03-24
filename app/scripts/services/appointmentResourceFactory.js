'use strict';

angular.module('dbApp').factory('appointmentFactory', function($resource) {
        
    return $resource('appointments/:appointmentID',
        { 
            appointmentID:   '@appointmentID',
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
            }
        }
    );
    });