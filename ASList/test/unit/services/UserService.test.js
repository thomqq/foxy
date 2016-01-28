'use strict';

var assert = require('assert');

describe('UserService', function () {

    it('should returns any users', function () {
        var UserService = sails.services.userservice;
        var result = UserService.getSystemUsers();
        
        assert.notEqual(result.length, 0);
    });
})