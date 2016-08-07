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
      $scope.selectedDisaster = $scope.disasters[indice];
    	if(indice == $scope.openIndex)
    		$scope.openIndex = -1;
    	else
    		$scope.openIndex = indice;
    }
  });
