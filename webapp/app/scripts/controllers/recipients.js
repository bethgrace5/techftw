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
    $scope.user = {};
    $scope.user.address= '';
    $scope.user.city= '';
    $scope.user.zipcode= '';
    $scope.user.county = '';
    $scope.user.food = false;
    $scope.user.water = false;
    $scope.user.gas = false;
    $scope.user.medicine = false;
    $scope.user.money = false;

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
        //clear form after submittion
        user.address= '';
        user.city= '';
        user.zipcode= '';
        user.county = '';
        user.food = false;
        user.water = false;
        user.gas = false;
        user.medicine = false;
        user.money = false;
      })
    };

    $scope.resourceIsEmpty = function(user) {
      return false;
    };

    $scope.reset = function() {
      $rootScope.submittedRecipients = [];
    };
    
    $scope.queryzip = function(recipients,supplyType) {
      var res = {};
      for(var i in recipients) {
        let recip = recipients[i];
        let zip = recip.zip;
        if (!res.hasOwnProperty(zip)) {
          res[zip] = 0;
        }  
        if (recip[supplyType] == true) {
          res[zip] += 1;
        }
      }
      
      res.sort(function(a,b) {
        return a - b;
      });
    
      $scope.toprecipients = res;
    }
    
  });
