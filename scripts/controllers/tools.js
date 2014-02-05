'use strict';

angular.module('devWorkflowApp')
  .controller('ToolsCtrl', function ($scope) {
		$scope.tabs = [
			{ title:"NodeJS", key:'node'},
			//{ title:"Bower", key:'bower' },
			//{ title:"Grunt", key:'grunt' },
			{ title:"Yeoman (Grunt & Bower)", key:'yeoman' },
			{ title:"Ruby", key:'ruby' },
			{ title:"Compass (Sass)", key:'compass' },
			{ title:"GIT", key:'git' },
			{ title:"Java", key:'java'},
			{ title:"PhpStorm", key:'phpstorm'}
		];
  });
