'use strict';

/**
 * @ngdoc function
 * @name techftw.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the techftw
 */
angular.module('techftw')
  .controller('MainCtrl', function ($scope, $rootScope, $http) {
    $scope.tab = 'home';
    $scope.data = {};

    $scope.activeTab = function(tabName) {
      if (tabName === $scope.tab) {
        return 'active';
      }
      return '';
    }
    $scope.user = '';
    $scope.pass = '';
    $scope.animal = 'cat';

    $scope.changeAnimal = function() {
      $scope.animal = 'dog';
    }


    $scope.request = function() {
      $http({
        'url': 'http://igems.doi.gov/arcgis/rest/services/igems_haz/MapServer/10/query?where=state%3D%27CA%27&text=&objectIds=&time=1462060800000%2C1470504158000&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=incidentname%2Cfirediscoverydatetime%2Cstatus%2Cstate&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&f=pjson&__ncforminfo=aFMei18iOwG2W3qrOS96WhgVMXaV2NWQFSHzZuMpo8Rpq5hBwxDqjQXRZwQA16c32qQiFTC8KAk5vpVKUq_apaNKqqZSDh1C9t4y1JwldITllLVc-NRGLnlpDpbMs50tjwgHSznHFvcUK4syaHAFV4vm5VywF2aqQ7JtZ8IX2xmztoLu0AS4cJCcAiGbjQqc6ucqQq0OeBosp_o30p-LETDOKOquM3zaK7VWNJjvrlL5YPgqOFjqotvDOSTyiRi_GBGsR-WoqHvvL1DBkXImUqHpLhsaw80M3YfhfCAEAw9ze89au9UKd20Q6oYz-WQgLj58_FQWDksUqZAhGitITxWAMLiey382tp4K69WOXO0OUIFQfpDFX3BJQpszU-oaGBam6D4jlkNFm5IngWt6otWVrMyHLzTNa5QCYO-S6MA9cZ0TH9dSp1vYSoB9qCzB3fVWlbChGd60Ao7G9GfPkNK-NATIgMnDMlYbjUXM_Qj4-9ko75RyqprWInNIuhbI4vOIduBAbmUv240HmtcmUGXzUkWc3DsenVLgFChrS4Qp-_z8KGrK9g%3D%3D',
        'method': "GET"
      }).then(function(success) {
        console.log(success);
        $scope.data = success.data;
      },function(failure) {
        console.log(failure);
      });
    }

    $scope.disasters = [
      {'id':1,
       'name': 'Erskine',
       'recieved':{
          'water':{ 'qty':10},
          'food':{ 'qty':10},
          'towels':{ 'qty':10},
          'medicine':{'qty':10}
       },
       'needs':{
          'water': { 'qty':10},
          'food': { 'qty':70},
          'towels': { 'qty':30},
          'medicine':{ 'qty':20}
       }
      },
      {'id':2, 'name': 'Disaster 2',
       'recieved':{
          'water':{ 'qty':10},
          'food':{ 'qty':10},
          'towels':{ 'qty':10},
          'medicine':{'qty':10}
       },
       'needs':{
          'water': { 'qty':10},
          'food': { 'qty':70},
          'towels': { 'qty':30},
          'medicine':{ 'qty':20}
       }
      },
      {'id':3, 'name': 'Disaster 3',
       'recieved':{
          'water':{ 'qty':10},
          'food':{ 'qty':10},
          'towels':{ 'qty':10},
          'medicine':{'qty':10}
       },
       'needs':{
          'water': { 'qty':10},
          'food': { 'qty':70},
          'towels': { 'qty':30},
          'medicine':{ 'qty':20}
       }
      },
      {'id':4, 'name': 'Disaster 4',
       'recieved':{
          'water':{ 'qty':10},
          'food':{ 'qty':10},
          'towels':{ 'qty':10},
          'medicine':{'qty':10}
       },
       'needs':{
          'water': { 'qty':10},
          'food': { 'qty':70},
          'towels': { 'qty':30},
          'medicine':{ 'qty':20}
       }
      },
      {'id':5, 'name': 'Disaster 5',
       'recieved':{
          'water':{ 'qty':10},
          'food':{ 'qty':10},
          'towels':{ 'qty':10},
          'medicine':{'qty':10}
       },
       'needs':{
          'water': { 'qty':10},
          'food': { 'qty':70},
          'towels': { 'qty':30},
          'medicine':{ 'qty':20}
       }
      },
      {'id':6, 'name': 'Disaster 6',
       'recieved':{
          'water':{ 'qty':10},
          'food':{ 'qty':10},
          'towels':{ 'qty':10},
          'medicine':{'qty':10}
       },
       'needs':{
          'water': { 'qty':10},
          'food': { 'qty':70},
          'towels': { 'qty':30},
          'medicine':{ 'qty':20}
       }
      },
    ];

  });
