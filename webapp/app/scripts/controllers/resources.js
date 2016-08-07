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
    globalFactory.pullDisasters();
    $scope.selectedType = 'water';
    $rootScope.tab = 'resources';

    $scope.getBaseNeed = function() {
      var type = $scope.selectedType;
      return $scope.selectedDisaster[type];
    };

    $scope.getAdjustedNeed = function() {
      var type = $scope.selectedType;
      var selectAdjustedType = type + 'Adjusted';
      return $scope.selectedDisaster[selectAdjustedType];
    };

    $scope.setAdjustedNeed = function(value) {
      var type = $scope.selectedType;
      var selectAdjustedType = type + 'Adjusted';
      $scope.selectedDisaster[selectAdjustedType] = value
      globalFactory.pushDisasters();
    };

    $scope.getResourceRecipientTotal = function(zip) {
      return $rootScope.queryzip($rootScope.submittedRecipients, $scope.selectedType, zip)
    };

    $scope.getReadjustedResourceNeed = function(zip) {
      var type = $scope.selectedType;
      var base = $scope.selectedDisaster[type];
      var selectAdjustedType = type + 'Adjusted';
      var adjusted = $scope.selectedDisaster[selectAdjustedType];
      var resourceQuantity = $scope.selectedDisaster[type];
      var recipientAmountConfirmed = $scope.getResourceRecipientTotal(type, zip);
      return base + adjusted - recipientAmountConfirmed;
    };

    $scope.getResourceNeed = function(zip, type) {
      var base = $scope.selectedDisaster[type];
      var selectAdjustedType = type + 'Adjusted';
      var adjusted = $scope.selectedDisaster[selectAdjustedType];
      var resourceQuantity = $scope.selectedDisaster[type];
      var recipientAmountConfirmed = $scope.getResourceRecipientTotal(type, zip);
      return base + adjusted - recipientAmountConfirmed;
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
