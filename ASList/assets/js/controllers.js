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

    aslistApp.controller('UserAdminController', ['$scope', '$location', 'AdminUserService', function ($scope, $location, AdminUserService) {
            AdminUserService.users().then(function(users){
                $scope.users = users;
                $scope.error = false;
            }, function(errorCode) {
                $scope.users = [];
                $scope.error = errorCode;
            });
            
            $scope.edit = function(userId) {
                $location.path('/admin/user/'+userId);
            };
    }]);    
    
    
    aslistApp.controller('UserAdminEditController', ['$scope', '$location', '$routeParams', 'AdminUserService', function ($scope, $location, $routeParams, AdminUserService) {
            AdminUserService.user($routeParams.userId).then(function(user){
                $scope.user = user;
            }, function(){
                alert('Nie znaleziono użytkownika');
                $location.path('/admin/users');
            });
    }]);
})()