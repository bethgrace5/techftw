'use strict';

/**
 * @ngdoc function
 * @name techftw.controller:MainCtrl
 * @description
 * # RecipientsCtrl
 * Controller of the techftw
 */
angular.module('techftw')
  .controller('RecipientsCtrl', function ($scope, $rootScope) {
    $scope.tab = 'resources';

    $scope.activeTab = function(tabName) {
      if (tabName === $scope.tab) {
        return 'active';
      }
      return '';
    };

    //$scope.submittedRecipient = [];
    $scope.update = function(user) {
      $rootScope.submittedRecipient.push(angular.copy(user));
    };

    $scope.reset = function() {
      $rootScope.submittedRecipient = [];
    };

    $scope.reset();
  });
