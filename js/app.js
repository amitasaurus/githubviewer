(function(){
	var app = angular.module('githubViewer', ['ngRoute']);

	
	app.config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/',{
				templateUrl : 'views/main.html',
				controller : 'mainCtrl as main',
			})
			.when('/user/:username',{
				templateUrl : 'views/user.html',
				controller : 'userCtrl as user'
			})
			.when('/user/:username/repo/:reponame',{
				templateUrl : 'views/repo.html',
				controller : 'repoCtrl as repo'
			})
			.otherwise({redirectTo : '/'});
	}]);
})();