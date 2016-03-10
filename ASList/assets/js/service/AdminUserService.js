'use strict';

(function () {
    
    var aslistApp = angular.module('ASListApp');
    
    aslistApp.service('AdminUserService', function ($http, $q) {

    return {
        users: function () {
            var defer = $q.defer();
            $http.get('/admin/user')
            .success(function (data) {
                defer.resolve(data);
            }).error(function (data, status) {
                defer.reject(status);
            });
            return defer.promise;
        },
        
        user: function(userId) {
            var defer = $q.defer();
            $http.get('/admin/user/'+userId)
            .success(function (data) {
                defer.resolve(data);
            }).error(function (data, status) {
                defer.reject(status);
            });
            return defer.promise;            
        }
    };
});
    
})()
