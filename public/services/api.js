angular.module('igchat')
	.factory('API', function($http){
		return{
			getFeed: function(){
				return  $http.get('https://newinstachat.herokuapp.com/api/feed');
			}
		}
	});