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
    $scope.isOpen = function(indice)
    {
      if(indice == $scope.openIndex)
        return 'text-showing';
      else
        return 'text-hidden';
    }
    $scope.changeIndex = function(indice)
    {
      $scope.selectedDisaster = $scope.disasters[indice];
    	if(indice == $scope.openIndex)
    		$scope.openIndex = -1;
    	else
    		$scope.openIndex = indice;
    }
  });
