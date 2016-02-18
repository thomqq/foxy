'use strict';

(function () {
    var AdminUserView = function (id, fullname, email, entryUUID, role) {
        this.id = id;
        this.fullname = fullname;
        this.email = email;
        this.entryUUID = entryUUID;
        this.role = role;
    }

    var UserService = {
        getSystemUsers: function (callback) {
            if (!callback) {
                console.log(new Error('Error: No Callback supplied, you must define a callback.').message);
                return;
            }

            User.find().populate('auth').exec(function (err, users) {
                if (err) {
                    console.error(err);
                    callback([]);
                }

                var result = [];

                users.forEach(function (user) {
                    var userData = new AdminUserView(user.id, user.auth.fullname, user.auth.email, user.auth.entryUUID, user.role);
                    result.push(userData);
                });

                callback(result);
            });
        }
    };

    module.exports = UserService;
})();