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
        controllerAs: 'resources'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
