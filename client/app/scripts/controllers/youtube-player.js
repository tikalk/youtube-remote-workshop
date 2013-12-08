'use strict';
//Required by player API:
function onYouTubeIframeAPIReady() {
    console.log('onYouTubeIframeAPIReady');
}



angular.module('clientApp')
    .controller('YoutubePlayerCtrl', function ($scope, Socket) {
        $scope.videoId = 'bbEoRnaOIbs';
        $scope.volume = 100;
        $scope.player = null;
        $scope.paused = false;


        function play(){
            console.log('playing ' + $scope.videoId);
            if($scope.paused){
                $scope.paused = false;
                return $scope.player.playVideo();
            }
            $scope.paused = false;
            if(!$scope.player){
                $scope.player = new YT.Player('player', {
                    width: '100%',
                    videoId: $scope.videoId,
                    events: {
                        'onReady': onPlayerReady,
                        'onStateChange': onPlayerStateChange
                    }
                });
            }else{
                $scope.player.loadVideoById($scope.videoId, 0, 'default');
            }
        }

        function volumeUp(){
            $scope.volume+=10;
            if($scope.volume>100){
                $scope.volume = 100;
            }
            $scope.player.setVolume($scope.volume);
            $scope.$apply();
        }

        function volumeDown(){
            $scope.volume-=10;
            if($scope.volume<0){
                $scope.volume = 0;
            }
            $scope.player.setVolume($scope.volume);
            $scope.$apply();
        }

        function onPlayerReady(event) {
            event.target.setVolume(100);
            event.target.playVideo();
        }

        function stopVideo() {
            $scope.player.stopVideo();
        }

        function pause() {
            $scope.player.pauseVideo();
            $scope.paused = true;
        }

        function onPlayerStateChange(event) {

        }

        $scope.play = play;
        $scope.volumeUp = volumeUp;
        $scope.volumeDown = volumeDown;
        $scope.pause = pause;

        $scope.devMode = true;

        var socket = Socket.getSocket();
        socket.on('play', function(data){
            $scope.videoId = data.videoId;
            play();
        });

        socket.on('pause', pause);
        socket.on('volume-up', volumeUp);
        socket.on('volume-down', volumeDown);

    });


