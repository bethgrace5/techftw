'use strict';

/**
 * @ngdoc function
 * @name techftw.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the techftw
 */
angular.module('techftw')
  .controller('MainCtrl', function ($scope, $rootScope) {
    $scope.tab = 'home';

    $scope.activeTab = function(tabName) {
      if (tabName === $scope.tab) {
        return 'active';
      }
      return '';
    }

  });
