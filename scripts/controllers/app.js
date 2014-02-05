'use strict';

angular.module('devWorkflowApp')
  .controller('AppCtrl', ['$scope', function ($scope) {

        $scope.oses = [
           {key: 'windows', name: 'Windows'},
           {key: 'mac', name: 'Mac'},
           {key: 'linux', name: 'Linux'}
        ];
  }]);
