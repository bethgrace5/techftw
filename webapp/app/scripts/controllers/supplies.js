'use strict';
angular.module('techftw')
  .controller('SuppliesCtrl', function ($scope, $rootScope, $http) {
    $rootScope.tab = 'supplies';
    $scope.newSupply = { 'org': '', 'type':'', 'qty':'', 'zip':''};

    $scope.supplyList = [
      {'org':'One Cross', 'type':'water bottles', 'qty':10, 'zip':'12345'},
      {'org':'Two Cross', 'type':'food', 'qty':10, 'zip':'12345'},
      {'org':'Red Cross', 'type':'gas', 'qty':10, 'zip':'12345'},
      {'org':'Blue Cross', 'type':'blankets', 'qty':10, 'zip':'12345'},
      {'org':'Private Donor', 'type':'clothes', 'qty':10, 'zip':'12345'},
      {'org':'Vons', 'type':'water', 'qty':10},
    ]


    $scope.addSupplies = function(form) {
      form.$setSubmitted();
      form.$setUntouched();
      $scope.supplyList.unshift($scope.newSupply);
      $scope.newSupply = { 'org': '', 'type':'', 'qty':'', 'zip':''};
    }

  });
