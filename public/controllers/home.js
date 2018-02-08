angular.module('igchat')
  .controller('HomeCtrl', function($scope, $window, $rootScope, $auth, API) {

    if ($auth.isAuthenticated() && ($rootScope.currentUser && $rootScope.currentUser.username)) {
      API.getFeed().then(function(data) {
       $(function () {
        var socket = io();
          $('form').submit(function(){
            socket.emit('chat message', $('#msgInput').val());
            $('#msgInput').val('');
            return false;
          });
          socket.on('chat message', function(msg){
            $('#messages').append($('<li>').text(msg));
           });
        });
      });
    }

    $scope.isAuthenticated = function() {
      return $auth.isAuthenticated();
    };

    $scope.linkInstagram = function() {
      $auth.link('instagram')
      	.then(function(response){
      		$window.localStorage.currentUser = JSON.stringify(response.data.user);
      		$rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
            API.getFeed().then(function(data) {
            $scope.data = data;
          });
      	});
    };

  }); 