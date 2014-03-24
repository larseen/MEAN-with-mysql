'use strict';

angular.module('dbApp').factory('roomFactory', function($resource) {
        
    return $resource('rooms/:roomID',
        {
            roomID:   '@roomID',
        }, 
        {
            'update'		: {
             	method		: 'PUT'
            },
            'getRoom'	: {
             	method		: 'GET',
             	isArray		: true,
             	 params		: {roomID: '@roomID'}
            },
            'getRooms'  : {
            	method		: 'GET',
            	isArray		: true
            },
            'createRoom': {
            	method		: 'POST',
            	isArray		: false,
                params      : {}
            }
        }
    );
    });