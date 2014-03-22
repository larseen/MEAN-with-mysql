'use strict';

angular.module('dbApp')
    .factory('testClientApi', function($resource) {
        return $resource('clients/:clientId', {
            clientId: '@_id'
        }, {
            update: {
                method: 'PUT'
            }
        });
    });