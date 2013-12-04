'use strict';

angular.module('clientApp')
  .controller('SearchCtrl', function ($scope) {
    $scope.searchYoutube = function(){
        console.log('Searching for: '+$scope.searchTerm);
      };
  });
