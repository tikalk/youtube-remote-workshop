'use strict';

angular.module('clientApp')
    .directive('videoItem', function () {
        return {
            templateUrl:'scripts/directives/videoItem.tmpl.html',
            restrict:'E',
            scope:{
                video: '='
            },
            link:function postLink(scope, element/*, attrs*/) {
                element.find('.glyphicon-play').on('click', function(e){
                    e.preventDefault();
                    console.log('clicked Play: '+scope.video.id.videoId);
                });
                element.find('.glyphicon-pause').on('click', function(e){
                    e.preventDefault();
                    console.log('clicked Pause: '+scope.video.id.videoId);
                });
                element.find('.glyphicon-star').on('click', function(e){
                    e.preventDefault();
                    console.log('clicked Star: '+scope.video.id.videoId);
                });
            }
        };
    });
