'use strict';
var request = require('supertest');
var assert = require('assert');  

describe('LDAPService', function () {

    describe('#getAllUsers()', function () {
        it('should return something', function () {
            assert.notEqual(sails.services.ldapservice.getAllUsers().length,0);
        });      
    });

});