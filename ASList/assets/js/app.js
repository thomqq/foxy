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
            }).when('/admin/users', {
                templateUrl: '/templates/admin/users.html',
                controller: 'UserAdminController'
            }).otherwise({
                redirectTo: '/',
                caseInsensitiveMatch: true
            });

            $locationProvider.html5Mode(true);
        }]);

})();