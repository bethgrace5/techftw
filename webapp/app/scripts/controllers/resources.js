'use strict';

/**
 * @ngdoc function
 * @name techftw.controller:ResourcesCtrl
 * @description
 * # ResourcesCtrl
 * Controller of the techftw
 */
angular.module('techftw')
  .controller('ResourcesCtrl', function ($scope, $rootScope, $routeParams) {
    $scope.disasters = [
      //Data retrieved from govenment services, parsed and stored on our local
      //databases.
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
      { 'name': 'Wild Fire 1',
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
      },
    ];

    function getResourceRecipientTotal(resource, zip) {
      return
        $rootScope.zipquery($rootScope.submittedRecipients, resource, zip)
    };

    function getReadjustedResourceNeed(resource, resourceAdjusted, zip) {
      return
        resource
        + resourceAdjusted
        - getResourceRecipientTotal(resource, zip);
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

  });
