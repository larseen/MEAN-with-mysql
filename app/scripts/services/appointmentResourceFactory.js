'use strict';

angular.module('dbApp').factory('appointmentFactory', function($resource, $q) {
        
    return $resource('appointments/:appointmentID/:latest',
        { 
            appointmentID:   '@appointmentID',
            latest:          '@latest',
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
            'getLatestID': {
                method      : 'POST',
                isArray     : false,
                params      : {latest: 'latest'}
            }
        }
    );

    functions.getLatestID = function() {
        var deferred = $q.defer();
        appointmentFactory.getLatestID(
            function(successResponse){
                console.log("success");
                deferred.resolve(successResponse);
            },function(errorResponse){
                console.log("error");
                deferred.reject(errorResponse);
            }
        );
    return deferred.promise;
    }

    });