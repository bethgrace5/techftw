'use strict';

/**
 * @ngdoc function
 * @name techftw.controller:ResourcesCtrl
 * @description
 * # ResourcesCtrl
 * Controller of the techftw
 */
angular.module('techftw')
  .controller('ResourcesCtrl', function ($scope, $rootScope) {
    $scope.tab = 'resources';

    $scope.activeTab = function(tabName) {
      if (tabName === $scope.tab) {
        return 'active';
      }
      return '';
    };
  });
