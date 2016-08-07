'use strict';

/**
 * @ngdoc function
 * @name techftw.controller:MainCtrl
 * @description
 * # RecipientsCtrl
 * Controller of the techftw
 */
angular.module('techftw')
.controller('RecipientsCtrl', function ($scope, $rootScope, $http) {
    $rootScope.tab = 'recipients';

    $scope.user = {};
    $scope.user.address= '';
    $scope.user.food = false;
    $scope.user.water = false;
    $scope.user.gas = false;
    $scope.user.medicine = false;
    $scope.user.money = false;
    
    function pushToFire() {
      $http({
        'url': 'https://techftw-237d9.firebaseio.com/recipients.json',
        'method': "PUT",
        'data': $rootScope.submittedRecipients
      }).then(function(success) {
        return success.data;
      });
    };
    
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

    //submit new recipient entry
    $scope.submit= function(user) {
      if (!(user.food ||
          user.water ||
          user.gas ||
          user.medicine ||
          user.money)) {
        alert('Please select a resource');
        return console.log("Resource selection should not all be false")
      };

      var submit = new Promise(function(resolve, reject) {
        $rootScope.submittedRecipients.push(angular.copy(user));
        console.log(JSON.stringify($rootScope.submittedRecipients));

        resolve();
      }).then( function() {
        //clear form after submission
        user.address= '';
        user.food = false;
        user.water = false;
        user.gas = false;
        user.medicine = false;
        user.money = false;
        pushToFire();
      })
    };

    $scope.resourceIsEmpty = function(user) {
      return false;
    };

    $scope.reset = function() {
      $rootScope.submittedRecipients = [];
    };

    $rootScope.queryzip = function(recipients,supplyType,zipIn = null) {
      var res = {};
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
              console.log(res[zip]);
        return res[zip];
      }
    }
  });
