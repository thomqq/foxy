'use strict';

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

aslistApp.controller('LoginController', ['$scope', '$location','AuthenticationService', function ($scope, $location, AuthenticationService) {
        $scope.formData = {};
        
        $scope.onLogin = function() {
            var result = AuthenticationService.login($scope.username, $scope.password);
            console.log(result);
            if(result.isSuccessfull) {
                $location.path('/dashboard');
            } else {
                $scope.error = result.errorMsg;
            }
        }
    }]);