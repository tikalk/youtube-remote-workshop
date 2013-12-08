'use strict';

angular.module('clientApp')
    .directive('videoItem', function ($rootScope, ApiService) {

        return {
            templateUrl:'scripts/directives/videoItem.tmpl.html',
            restrict:'E',
            scope:{
                video: '=',
                playerId: '@'
            },
            link:function postLink(scope, element, attrs) {
                element.find('.glyphicon-play').on('click', function(e){
                    e.preventDefault();
                    console.log('clicked Play: '+scope.video.id.videoId);
                    ApiService.play(attrs.playerid, scope.video.id.videoId);
                    $rootScope.nowPlaying = scope.video.id.videoId;
                });
                element.find('.glyphicon-pause').on('click', function(e){
                    e.preventDefault();
                    console.log('clicked Pause: '+scope.video.id.videoId);
                    ApiService.pause(attrs.playerid);
                });
                element.find('.glyphicon-volume-down').on('click', function(e){
                    e.preventDefault();
                    console.log('clicked Volume down: '+scope.video.id.videoId);
                    ApiService.volumeDown(attrs.playerid);
                });
                element.find('.glyphicon-volume-up').on('click', function(e){
                    e.preventDefault();
                    console.log('clicked volume up: '+scope.video.id.videoId);
                    ApiService.volumeUp(attrs.playerid);
                });
                element.find('.glyphicon-star').on('click', function(e){
                    e.preventDefault();
                    console.log('clicked Star: '+scope.video.id.videoId);
                });

                scope.nowPlaying = function(id){
                    return id === $rootScope.nowPlaying ? 'now-playing':'';
                };
            }
        };
    });
