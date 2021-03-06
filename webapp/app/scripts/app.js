'use strict';

/**
 * @ngdoc overview
 * @name techftw
 * @description
 * # techftw
 *
 * Main module of the application.
 */
angular
  .module('techftw', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/resources', {
        templateUrl: 'views/resources.html',
        controller: 'ResourcesCtrl',
        controllerAs: 'resourceDetails'
      })
      .when('/resources/:id', {
        templateUrl: 'views/resource-details.html',
        controller: 'ResourcesCtrl',
        controllerAs: 'resources'
      })
      .when('/recipients', {
        templateUrl: 'views/recipients.html',
        controller: 'RecipientsCtrl',
        controllerAs: 'recipients'
      })
      .when('/data', {
        templateUrl: 'views/data.html',
        controller: 'DataCtrl',
        controllerAs: 'data'
      })
      .when('/supplies', {
        templateUrl: 'views/supplies.html',
        controller: 'SuppliesCtrl',
        controllerAs: 'supplies'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
