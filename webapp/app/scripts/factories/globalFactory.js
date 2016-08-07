
'use strict';

angular.module('techftw')
  .factory('globalFactory', function($rootScope, $http) {

    console.log('factory init');


    var service = {};

    // private
    var num1 = 1;
    var num2 = 2;

    function addNumbers() {
      return num1 + num2;
    }

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

    function generateRecipientMockData() {
      var user = {};
      user.address= '';
      user.city= '';
      user.zip= '';
      user.county = '';
      user.food = false;
      user.water = false;
      user.gas = false;
      user.medicine = false;
      user.money = false;

      for (var i = 0; i < 30000; i++) {
        user = {};
        user.address= getRandomAddress() + ' ' + getRandomStreetName();
        var city = getRandomCityZip()[0];
        var zip= getRandomCityZip()[1];
        user.city= city;
        user.zip= zip;
        user.county = 'Kern County' ;
        user.food = getRandomResource();
        user.water = getRandomResource();
        user.gas = getRandomResource();
        user.medicine = getRandomResource();
        user.money = getRandomResource();
        $rootScope.submittedRecipients.push(angular.copy(user));
      };
    };

    service.generateRecipientMockData = function() {
      return generateRecipientMockData()
    }

    return service;
  });
