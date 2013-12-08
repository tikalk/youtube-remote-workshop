'use strict';

angular.module('clientApp')
    .service('ApiService', function ApiService($http) {
        return {
            search:function (query) {
                return $http.get('/search/'+query);
            },
            play: function (playerId, videoId) {
                return $http.post('/player/play/'+playerId+'?videoId='+videoId);
            },
            pause: function (playerId) {
                return $http.post('/player/pause/'+playerId);
            },
            volumeUp: function (playerId) {
                return $http.post('/player/volume-up/'+playerId);
            },
            volumeDown: function (playerId) {
                return $http.post('/player/volume-down/'+playerId);
            }
        };
    });

