'use strict';

var UserService = {

    getSystemUsers: function() {

        var result = [];
        User.find().populate('auth').exec(function(err, users){
            console.log(users);
        });

        return result;
    }
};

module.exports = UserService;