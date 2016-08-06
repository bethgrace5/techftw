'use strict';

/**
 * @ngdoc function
 * @name techftw.controller:ResourcesCtrl
 * @description
 * # ResourcesCtrl
 * Controller of the techftw
 */
angular.module('techftw')
  .controller('ResourcesCtrl', function ($scope, $rootScope, $routeParams) {
    $scope.selectedDisaster = {};
    
    _.map($scope.disasters, function(value, key){
      if (value.id == $routeParams.id) {
        $scope.selectedDisaster = value;
      }
    });
  });
