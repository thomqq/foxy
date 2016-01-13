var request = require('supertest');

describe('AuthController', function () {

    describe('#login()', function () {
        it('should return 403', function (done) {
            request(sails.hooks.http.app)
                    .post('/users/login')
                    .send({username: 'test', password: 'test'})
                    .expect(403, done);
        });
        
        it('should return 200 on success', function (done) {
            request(sails.hooks.http.app)
                    .post('/users/login')
                    .send({username: 'etdouser2', password: 'etdouser2'})
                    .set('Accept', 'application/json')
                    .expect(200, done);
        });        
    });

});