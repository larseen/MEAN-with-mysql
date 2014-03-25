'use strict';

angular.module('dbApp').factory('groupFactory', function($resource) {
        
    return $resource('groups/:groupID',
        { 
            groupID:   '@groupID',
        }, 
        {
            'editGroup'		: {
             	method		: 'POST',
                isArray     : false,
                params      : {groupID: '@groupID'} 
            },
            'getGroup'	: {
             	method		: 'GET',
             	isArray		: true,
             	 params		: {groupID: '@groupID'}
            },
            'getGroups'  : {
            	method		: 'GET',
            	isArray		: true
            },
            'createGroup': {
            	method		: 'POST',
            	isArray		: false,
                params      : {}
            }
        }
    );
    });