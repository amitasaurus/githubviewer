(function(){
	angular.module('githubViewer')
		   .controller('repoCtrl',['$routeParams','dataService','$log',function($routeParams, dataService, $log){
		   		var vm = this;
		   		vm.username = $routeParams.username;
		   		vm.reponame = $routeParams.reponame;
		   		dataService.getContributors(vm.username, vm.reponame)
		   					.then(onSuccess)
		   					.catch(onError);
		   		function onSuccess(data){
		   			vm.contributors = data;
		   		}
		   		function onError(errMsg){
		   			$log.error(errMsg);
		   		}
		   }]);
})();