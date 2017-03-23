(function(){
	angular.module('githubViewer')
	       .controller('mainCtrl',['$location', function($location){
				var vm = this;
				vm.search = function(username){
				$location.path('/user/' + username);
		}
	}]);
})();