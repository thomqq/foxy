(function () {
    
    var aslistApp = angular.module('ASListApp');
    
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
    
    aslistApp.controller('DashboardController', ['$scope', function ($scope) {
            
        }]);
    
})()