angular.module('igchat', ['ngRoute', 'ngMessages', 'satellizer'])
    .config(function($routeProvider, $authProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl'
            })
            .when('/home', {
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl'
            })
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
            })
            .when('/signup', {
                templateUrl: 'views/signup.html',
                controller: 'SignupCtrl'
            })
            .otherwise('/');
    
    $authProvider.loginUrl = 'http://newinstachat.herokuapp.com/auth/login';
    $authProvider.signupUrl = 'http://newinstachat.herokuapp.com/auth/signup';
    $authProvider.oauth2({
      name: 'instagram',
      url: 'http://newinstachat.herokuapp.com/auth/instagram',
      redirectUri: 'http://newinstachat.herokuapp.com/home',
      clientId: 'dc4d6a7ecd0248e7a896434f86a816c3',
      requiredUrlParams: ['scope'],
      scope: ['public_content'],
      scopeDelimiter: '+',
      authorizationEndpoint: 'https://api.instagram.com/oauth/authorize'
    });
  })
  .run(function($rootScope, $window, $auth) {
  if ($auth.isAuthenticated()) {
      $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
    }
  });


