'use strict';

angular.module('dbApp').factory('groupFactory', function($resource) {
        
    return $resource('group/:groupID',
        { 
            groupID:   '@groupID',
        }, 
        {
            'update'		: {
             	method		: 'PUT'
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