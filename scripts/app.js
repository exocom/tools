'use strict';

angular.module('devWorkflowApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
	'ui.utils'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/windows', {
        templateUrl: 'views/windows.html',
        controller: 'WindowsCtrl'
      })
      .when('/mac', {
        templateUrl: 'views/mac.html',
        controller: 'MacCtrl'
      })
      .when('/linux', {
        templateUrl: 'views/linux.html',
        controller: 'LinuxCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
