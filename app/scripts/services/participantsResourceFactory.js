'use strict';

angular.module('dbApp').factory('participantsFactory', function($resource) {
        
    return $resource('/participants/:employeeID',
        { 
            employeeID: '@employeeID'
        },
        { 
           'getInvites' : {
            	method		: 'GET',
            	isArray		: true,
        },
           'getInvitesByID' : {
                method      : 'GET',
                isArray     : true,
                params      : {employeeID : '@employeeID'}
        }
    });
    });