
'use strict';

angular.module('techftw')
  .factory('globalFactory', function($rootScope, $http) {

    var service = {};


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

    //Mock Recipient Entries
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

      for (var i = 0; i < 100; i++) {
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

    //Mock Disaster Entries
    //
    function generateDisasterMockData() {
      //Data retrieved from govenment services, parsed and stored on our local
      //databases.
      $rootScope.disasters = [
        { 'name': 'Wild Fire 1',
          'description': 'Trees and stuff burning.',
          'zip': 93309,
          'water': 5000,
          'waterAdjusted': 500,
          'food': 3000,
          'foodAdjusted': 1000,
          'gas': 200,
          'gasAdjusted': 100,
          'medicine': 50,
          'medicineAdjusted':100,
          'money': 5000,
          'moneyAdjusted': 1000,
        },
        { 'name': 'Wild Fire 2',
          'description': 'Look at me, I\'m burning.',
          'zip': 93268,
          'water': 2000,
          'waterAdjusted': 0,
          'food': 1000,
          'foodAdjusted': -200,
          'gas': 100,
          'gasAdjusted': 0,
          'medicine': 0,
          'medicineAdjusted': 50,
          'money': 5000,
          'moneyAdjusted': 2000
        },
        { 'name': 'Wild Fire 3',
          'discription': 'Stop, Drop and Roll.',
          'zip': 93203,
          'water': 5000,
          'waterAdjusted': 500,
          'food': 3000,
          'foodAdjusted': 1000,
          'gas': 200,
          'gasAdjusted':-100,
          'medicine': 50,
          'medicineAdjusted':100,
          'money': 5000,
          'moneyAdjusted': 1000
        },
        { 'name': 'Wild Fire 4',
          'description': 'This is fine.',
          'zip':  93280,
          'water': 5000,
          'waterAdjusted': 500,
          'food': 3000,
          'foodAdjusted': 1000,
          'gas': 200,
          'gasAdjusted':-100,
          'medicine': 50,
          'medicineAdjusted':100,
          'money': 5000,
          'moneyAdjusted': 1000
        },
        { 'name': 'Wild Fire 5',
          'description': 'Fight fire with fire.',
          'zip': 93263,
          'water': 5000,
          'waterAdjusted': 500,
          'food': 3000,
          'foodAdjusted': 1000,
          'gas': 200,
          'gasAdjusted':-100,
          'medicine': 50,
          'medicineAdjusted':100,
          'money': 5000,
          'moneyAdjusted': 1000
        }
      ]
    };
    
    service.pushDisasters = function() {
      $http({
        'url': 'https://techftw-237d9.firebaseio.com/disasters.json',
        'method': "PUT",
        'data': $rootScope.disasters
      }).then(function(success) {
        return success.data;
      });
    }
    
    service.pullDisasters = function(func = null) {
      $http({
        'url': 'https://techftw-237d9.firebaseio.com/disasters.json',
        'method': "GET"
      }).then(function(success) {
        $rootScope.disasters = success.data;
        if (func !== null) {
          func();
        }
      });
    };

    service.generateRecipientMockData = function() {
      return generateRecipientMockData();
    };

    service.generateDisasterMockData= function() {
      return generateDisasterMockData();
    };

    return service;
  });
