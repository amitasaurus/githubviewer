(function(){
	angular.module('githubViewer')
		   .factory('dataService', ['$http','$log','$q',function($http,$log,$q){
		   		return {
		   			getUser : getUser,
		   			getRepos : getRepos,
		   			getContributors : getContributors
		   		};

		   		function getUser(username){
		   			return $http.get('https://api.github.com/users/' + username, {cache : true})
		   						.then(onSuccess)
		   						.catch(onError);

		   			function onSuccess(response){
		   				return response.data;
		   			}
		   			function onError(response){
		   				return $q.reject('Error ' + response.status);
		   			}
		   		}

		   		function getRepos(username){
		   			return $http.get('https://api.github.com/users/' + username + '/repos', {cache:true})
		   						.then(onSuccess)
		   						.catch(onError);

		   			function onSuccess(response){
		   				return response.data;
		   			}
		   			function onError(response){
		   				return $q.reject('Error ' + response.status);
		   			}
		   		}

		   		function getContributors(username,reponame){
		   			return $http.get('https://api.github.com/repos/' + username + '/' + reponame)
		   						.then(repoSuccess)
		   						.catch(onFail);

		   			function repoSuccess(response){
		   				return $http.get(response.data.contributors_url, {cache : true})
		   							.then(contributorsSuccess)

		   				function contributorsSuccess(response){
		   					return response.data;
		   				}

		   			}

		   			function onFail(response){
		   				return $q.reject('Error ' + response.status);
		   			}
		   		}
		   }])
})();