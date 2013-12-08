'use strict';

angular.module('clientApp')
  .controller('SearchCtrl', function ($scope, ApiService) {
        $scope.videoItems = [];
    $scope.searchYoutube = function(){
        console.log('Searching for: '+$scope.searchTerm);
        ApiService.search($scope.searchTerm)
            .success(function(data){
                angular.forEach(data.items, function(item){
                    console.log(item);
                    $scope.videoItems.push(item);
                });
            });
      };
  });
