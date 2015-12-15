'use strict';

var aslistApp = angular.module('ASListApp', ['ngRoute', 'ui.bootstrap']);

aslistApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: '/templates/login.html',
            controller: 'LoginController'
        }).otherwise({
            redirectTo: '/',
            caseInsensitiveMatch: true
        })
    }]);

aslistApp.controller('LoginController', ['$scope', 'AuthenticationService', function ($scope, AuthenticationService) {
        $scope.formData = {};
        
        $scope.onLogin = function() {
            alert('Dupa ' + $scope.username + ' ' + $scope.password);
        }
    }]);