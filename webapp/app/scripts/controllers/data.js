'use strict';

/**
 * @ngdoc function
 * @name techftw.controller:DataCtrl
 * @description
 * # DataCtrl
 * Controller of the techftw
 */
angular.module('techftw')
  .controller('DataCtrl', function ($scope, $rootScope, $http) {
    $rootScope.tab = 'data';

    $scope.supply='water';

    $scope.getClass = function(type) {
      if (type == $scope.supply) {
        return 'active';
      }
      return '';
    }

    $scope.obj = [
      {'zip':'93312', 'water':{'qty':'1500', 'households':'780'}, 'gas':{'qty':'21', 'households':'10'}, 'food':{'qty':'30', 'households':'15'}, 'money':{'qty':'40', 'households':'10'}, 'medicine':{'qty':'50', 'households':'50'}},
      {'zip':'93313', 'water':{'qty':'2000', 'households':'1230'}, 'gas':{'qty':'20', 'households':'15'}, 'food':{'qty':'35', 'households':'15'}, 'money':{'qty':'20', 'households':'10'}, 'medicine':{'qty':'60', 'households':'80'}},
      {'zip':'93314', 'water':{'qty':'1500', 'households':'890'}, 'gas':{'qty':'21', 'households':'15'}, 'food':{'qty':'35', 'households':'50'}, 'money':{'qty':'43', 'households':'10'}, 'medicine':{'qty':'80', 'households':'18'}},
      {'zip':'93315', 'water':{'qty':'1000', 'households':'910'}, 'gas':{'qty':'20', 'households':'15'}, 'food':{'qty':'50', 'households':'10'}, 'money':{'qty':'43', 'households':'10'}, 'medicine':{'qty':'58', 'households':'18'}},
      {'zip':'93316', 'water':{'qty':'1000', 'households':'500'}, 'gas':{'qty':'20', 'households':'10'}, 'food':{'qty':'30', 'households':'10'}, 'money':{'qty':'40', 'households':'10'}, 'medicine':{'qty':'50', 'households':'10'}},
    ];

  });
