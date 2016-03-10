'use strict';

(function () {
    
    var aslistApp = angular.module('ASListApp');
    
    aslistApp.service('AdminUserService', function ($http, $q) {

    return {
        users: function () {
            var defer = $q.defer();
            $http.get('/admin/user2')
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
