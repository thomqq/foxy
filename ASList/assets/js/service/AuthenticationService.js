

aslistApp.service('AuthenticationService', function ($http, $q) {
    var AuthorizationRezult = function(isSuccessfull, token, errorMsg) {
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
                    console.log(new AuthorizationRezult(false, undefined, err.error));
                    defer.resolve(new AuthorizationRezult(false, undefined, err.error));
                    return;
                }
                console.log(new AuthorizationRezult(false, undefined, 'Błąd komunikacji: Error '+status));
                defer.resolve(new AuthorizationRezult(false, undefined, 'Błąd komunikacji: Error '+status));
                return;
            });
            return defer.promise;
        }
    };
});