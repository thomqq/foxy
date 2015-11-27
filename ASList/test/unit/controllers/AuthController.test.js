var request = require('supertest');

describe('AuthController', function () {

    describe('#login()', function () {
        it('should return 403', function (done) {
            request(sails.hooks.http.app)
                    .post('/users/login')
                    .send({name: 'test', password: 'test'})
                    .expect(403, done);
        });
    });

});