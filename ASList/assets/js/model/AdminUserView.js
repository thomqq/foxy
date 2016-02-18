'use strict';

(function () {
    var AdminUserView = function (id, fullname, email, entryUUID, role) {
        this.id = id;
        this.fullname = fullname;
        this.email = email;
        this.entryUUID = entryUUID;
        this.role = role;
    }

    module.exports = AdminUserView;
})();
