'use strict';

angular.module('clientApp')
  .controller('SearchCtrl', function ($scope, ApiService) {
    $scope.searchYoutube = function(){
        console.log('Searching for: '+$scope.searchTerm);
        ApiService.search($scope.searchTerm)
            .success(function(data){
               console.log(data);
            });
      };
  });
