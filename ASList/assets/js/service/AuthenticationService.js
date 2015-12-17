

aslistApp.service('AuthenticationService', function ($http, $q) {
    function AuthorizationRezult(isSuccessfull, token, errorMsg) {
        this.isSuccessfull = isSuccessfull;
        this.token = token;
        this.errorMsg = errorMsg;
    };
    
    return {
        login: function (username, password) {
            var defer = $q.defer();
            $http.post('/users/login', {'username': username, 'password': password})
            .success(function (resp) {
                defer.resolve(AuthorizationRezult(true, 'XXX'));
            }).error(function (err, status) {
                if(err.error !== undefined) {
                    defer.resolve(AuthorizationRezult(false, undefined, err.error));
                }
                defer.resolve(AuthorizationRezult(false, undefined, 'Błąd komunikacji: Error '+status));
            });
            return defer.promise;
        }
    };
});