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

    //-------------------------mock data
    function getRandomAddress() {
      return Math.floor(Math.random() * (29999 - 10000) + 10000);
    };

    function getRandomStreetName() {
      var streetNames = [
        'Jefferson St.',
        'Evergreen Ave.',
        'Main St.',
        'Wilson Way',
        'Oak St.',
        'Walnut Way',
        'Ridge Rd.'
      ];
      return streetNames[Math.floor(Math.random() * (6 - 0) + 0)];
    };

    function getRandomCityZip() {
      var streetNames = [
        ['Bakersfield', 93309],
        ['Taft', 93268],
        ['Arvin', 93203],
        ['Wasco', 93280],
        ['Shafter', 93263]
      ];
      return streetNames[Math.floor(Math.random() * (4 - 0) + 0)];
    };

    function getRandomAddress() {
      return Math.floor(Math.random() * (30000 - 10000) + 10000);
    };

    function getRandomResource() {
      var streetNames = [
        false
        ,
        true
      ];
      return streetNames[Math.floor(Math.random() * (2 - 0) + 0)];
    };

    $rootScope.dataNotInitiated = true;

    if($rootScope.dataNotInitiated) {
      $rootScope.dataNotInitiated = false;

      $scope.user = {};
      $scope.user.address= '';
      $scope.user.city= '';
      $scope.user.zip= '';
      $scope.user.county = '';
      $scope.user.food = false;
      $scope.user.water = false;
      $scope.user.gas = false;
      $scope.user.medicine = false;
      $scope.user.money = false;



      for (var i = 0; i < 30000; i++) {
        $scope.user = {};
        $scope.user.address= getRandomAddress() + ' ' + getRandomStreetName();
        var city = getRandomCityZip()[0];
        var zip= getRandomCityZip()[1];
        $scope.user.city= city;
        $scope.user.zip= zip;
        $scope.user.county = 'Kern County' ;
        $scope.user.food = getRandomResource();
        $scope.user.water = getRandomResource();
        $scope.user.gas = getRandomResource();
        $scope.user.medicine = getRandomResource();
        $scope.user.money = getRandomResource();
        $rootScope.submittedRecipients.push(angular.copy($scope.user));
      };
    };
    //-------------------------mock data

    $scope.user = {};
    $scope.user.address= '';
    $scope.user.city= '';
    $scope.user.zip= '';
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
        //clear form after submission
        user.address= '';
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

    $rootScope.queryzip = function(recipients,supplyType,zipIn = null) {
      var res = {};
      for (var i in recipients) {
        let recip = recipients[i];
        let zip = recip.zip;
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
        return res[zip];
      }
    }
  });
