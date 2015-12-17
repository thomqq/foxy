

aslistApp.service('AuthenticationService', function ($http, $q) {
    var AuthorizationResult = function(isSuccessfull, token, errorMsg) {
        this.isSuccessfull = isSuccessfull;
        this.token = token;
        this.errorMsg = errorMsg;
    };

    return {
        login: function (username, password) {
            var defer = $q.defer();
            $http.post('/users/login', {'username': username, 'password': password})
            .success(function (resp) {
                defer.resolve(new AuthorizationResult(true, 'XXX'));
            }).error(function (err, status) {
                if(err.error !== undefined) {
                    defer.resolve(new AuthorizationResult(false, undefined, err.error));
                } else {
                    defer.resolve(new AuthorizationResult(false, undefined, 'Błąd komunikacji: Error '+status));
                }
            });
            return defer.promise;
        }
    };
});