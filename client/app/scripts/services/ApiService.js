'use strict';

angular.module('clientApp')
    .service('ApiService', function ApiService($http) {
        return {
            search:function (query) {
                return $http.get('/search/'+query);
            }
        };
    });

