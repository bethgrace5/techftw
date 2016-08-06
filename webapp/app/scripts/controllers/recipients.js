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

    $scope.submit= function(user) {
      var submit = new Promise(function(resolve, reject) {
        $rootScope.submittedRecipients.push(angular.copy(user));
        console.log(JSON.stringify($rootScope.submittedRecipients));

        resolve();
      }).then( function() {
        //clear form after submittion
        user.name = '';
        user.address= '';
        user.city= '';
        user.zipcode= '';
        user.county = '';
        user.email = null;
      })
    };

    $scope.reset = function() {
      $rootScope.submittedRecipients = [];
    };
  });
