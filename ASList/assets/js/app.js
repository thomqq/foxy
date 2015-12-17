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

aslistApp.controller('LoginController', ['$scope', '$location', 'AuthenticationService', function ($scope, $location, AuthenticationService) {
        $scope.formData = {};

        $scope.onLogin = function () {
            AuthenticationService.login($scope.username, $scope.password).then(function (authResult) {
                if (authResult.isSuccessfull) {
                    $location.path('/dashboard');
                } else {
                    $scope.error = authResult.errorMsg;
                }
            });
        }
    }]);