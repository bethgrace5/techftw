'use strict';

/**
 * @ngdoc function
 * @name techftw.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the techftw
 */
angular.module('techftw')
  .controller('MainCtrl', function ($scope, $rootScope, $http, globalFactory) {
    $rootScope.submittedRecipients = [];
    $rootScope.tab = 'home';
    $scope.data = {};

    $scope.systemUser = {};
    $scope.systemUser.email = 'testuser@test.com';
    $scope.systemUser.password ='password';

    //globalFactory.generateRecipientMockData();
    //globalFactory.generateDisasterMockData();
    
        
    function pullFromFire() {
      $http({
        'url': 'https://techftw-237d9.firebaseio.com/recipients.json',
        'method': "GET"
      }).then(function(success) {
        if (success.data !== null) {
          $rootScope.submittedRecipients = success.data;
        }
      });
    };

    pullFromFire();  

    $scope.activeTab = function(tabName) {
      if (tabName === $scope.tab) {
        return 'active';
      }
      return '';
    }

    $rootScope.queryzip = function(recipients,supplyType,zipIn = null) {
      var res = {};
      var zip;

      for (var i in recipients) {
        let recip = recipients[i];
        var zip = recip.zip;
        if (!res.hasOwnProperty(zip)) {
          res[zip] = 0;
        }
        if (recip[supplyType] == true) {
          res[zip] += 1;
        }
      }
      if (zipIn === null) {
        var sortable = [];
        for (var r in res) {
          sortable.push([r, res[r]]);
        }

        sortable.sort(function(a,b) {
          return a[1] - b[1];
        });
        sortable.reverse();
        $scope.toprecipients = sortable;
        return sortable;
      } else {
        $rootScope.zipneed = res;
        return res[zip];
      }
    }
  });
