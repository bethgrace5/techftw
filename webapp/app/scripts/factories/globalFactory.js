
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



    // public
    service.getCalculation = function() {
      return 4;
    }

    //service = {
      //'newFunction': function() {
      //},
    //}



    return service;
  });
