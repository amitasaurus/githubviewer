(function(){
	angular.module('githubViewer')
	       .controller('userCtrl',['$routeParams','dataService','$location',function($routeParams, dataService, $location){
	       	var vm = this;
	       	vm.username = $routeParams.username;
	       	dataService.getUser(vm.username)
	       			   .then(onUserSuccess)
	       			   .catch(error);
	       	dataService.getRepos(vm.username)
	       	     	   .then(onRepoSuccess)
	       			   .catch(error);
	       	function onUserSuccess(userData){
	       		vm.data = userData;
	       	}
	       	function onRepoSuccess(repoData){
	       		vm.repoData = repoData;
	       	}
	       	function error(reason){
	       		console.log(reason);
	       	}

	       	vm.redirectTo = function(repo){
	       		var url = 'https://api.github.com/repos/' + vm.username + '/' + repo.name
	       		console.log(url);
	       		$location.path('/user/' + vm.username + '/repo/' + repo.name);
	       	}
	       }]);
})();