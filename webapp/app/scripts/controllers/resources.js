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
    $scope.openIndex = -1;
    $scope.changeIndex = function(indice)
    {
    	if(indice == $scope.openIndex)
    		$scope.openIndex = -1;
    	else
    		$scope.openIndex = indice;
    }
    _.map($scope.disasters, function(value, key){
      if (value.id == $routeParams.id) {
        $scope.selectedDisaster = value;
      }
    });
  });
