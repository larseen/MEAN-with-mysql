'use strict';

angular.module('dbApp').factory('participantsFactory', function($resource) {
        
    return $resource('/participants',
        { 
        },
        { 
           'getInvites' : {
            	method		: 'GET',
            	isArray		: true,
        },
    });
    });