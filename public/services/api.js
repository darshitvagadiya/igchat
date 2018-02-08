angular.module('igchat')
	.factory('API', function($http){
		return{
			getFeed: function(){
				return  $http.get('http://newinstachat.herokuapp.com/api/feed');
			}
		}
	});