'use strict';

/**
 * @ngdoc function
 * @name techftw.controller:ResourcesCtrl
 * @description
 * # ResourcesCtrl
 * Controller of the techftw
 */
angular.module('techftw')
  .controller('ResourcesCtrl', function ($scope, $rootScope, globalFactory) {
    $scope.selectedType = 'water';
    $scope.disasters = $rootScope.disasters;

    $scope.getResourceRecipientTotal = function(zip) {
      return $rootScope.queryzip($rootScope.submittedRecipients, $scope.selectedType, zip)
    };

    $scope.getReadjustedResourceNeed = function(resource, resourceAdjusted, zip) {
      return resource + resourceAdjusted - getResourceRecipientTotal(resource, zip);
    };

    $scope.selectedDisaster = {};
    $scope.openIndex = -1;
    $scope.isOpen = function(indice)
    {
      if(indice == $scope.openIndex)
        return 'text-showing';
      else
        return 'text-hidden';
    }

    $scope.changeIndex = function(indice)
    {
      $scope.selectedDisaster = $scope.disasters[indice];
    	if(indice == $scope.openIndex)
    		$scope.openIndex = -1;
    	else
    		$scope.openIndex = indice;
    }

    $scope.getClass = function(type) {
      var style = 'btn btn-default form-control';

        if(type == $scope.selectedType) {
          style = 'btn btn-primary form-control';
        }
      return style;
    }

    $scope.selectType = function(t) {
      $scope.selectedType = t;
    }

  });
