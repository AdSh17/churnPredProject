'use strict'
angular
    .module('churnPredApp')
    .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider

        .state('/', {
            url: "/",
            templateUrl: "views/major.html",
        })

        .state('login', {
            
            url: "/login",
            templateUrl: "views/login.html",
            controller :"churnAuthCtrl",
        })
        .state('logout', {
            url: "/logout",
            templateUrl: "views/login.html",
             controller :"logOutCtrl",
           
        })
        .state('home', {
            url: "/main",
            templateUrl: "views/main.html",
           
        })
        
})
.run(function($rootScope, $state) {
    $rootScope.$state = $state;
});