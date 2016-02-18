'use strict';

var assert = require('assert');

describe('UserService', function () {

    it('should returns any users', function (done) {
        var UserService = sails.services.userservice;
        UserService.getSystemUsers(function(users){
            assert.notEqual(users.length, 0);
            done();
        });
    });
})