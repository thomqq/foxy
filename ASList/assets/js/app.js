'use strict';
(function () {
    
    var aslistApp = angular.module('ASListApp', ['ngRoute', 'ui.bootstrap']);

    aslistApp.config(['$routeProvider', '$locationProvider',
        function ($routeProvider, $locationProvider) {
            $routeProvider.when('/', {
                templateUrl: '/templates/login.html',
                controller: 'LoginController'
            }).when('/dashboard', {
                templateUrl: '/templates/dashboard.html',
                controller: 'DashboardController'
            }).otherwise({
                redirectTo: '/',
                caseInsensitiveMatch: true
            });

            $locationProvider.html5Mode(true);
        }]);

})();