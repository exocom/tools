'use strict';

angular.module('devWorkflowApp')
  .controller('OsNavCtrl', function ($scope) {
		$scope.oses = [
			{key: 'windows', name: 'Windows'},
			{key: 'mac', name: 'Mac'},
			{key: 'linux', name: 'Linux (Debian)'}
		];
  });
