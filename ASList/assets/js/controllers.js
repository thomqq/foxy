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

    aslistApp.controller('UserAdminController', ['$scope', 'AdminUserService', function ($scope, AdminUserService) {
            AdminUserService.users().then(function(users){
                $scope.users = users;
                $scope.error = false;
            }, function(errorCode) {
                $scope.users = [];
                $scope.error = errorCode;
            });
    }]);    
    
})()