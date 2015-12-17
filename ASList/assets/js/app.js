'use strict';

var aslistApp = angular.module('ASListApp', ['ngRoute', 'ui.bootstrap']);

aslistApp.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            templateUrl: '/templates/login.html',
            controller: 'LoginController'
        }).otherwise({
            redirectTo: '/',
            caseInsensitiveMatch: true
        });
        
        $locationProvider.html5Mode(true);
    }]);

aslistApp.controller('LoginController', ['$scope', 'AuthenticationService', function ($scope, AuthenticationService) {
        $scope.formData = {};
        
        $scope.onLogin = function() {
            alert('Dupa ' + $scope.username + ' ' + $scope.password);
        }
    }]);