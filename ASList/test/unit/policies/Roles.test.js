'use strict';

var request = require('supertest');

describe('Policies', function () {

    var token;

    before(function(beforeDone){
            request(sails.hooks.http.app)
                .post('/users/login')
                .send({username: 'etdouser2', password: 'etdouser2'})
                .set('Accept', 'application/json')
                .expect(200)            
                .end(function(err, res){
                    if (err) {
                        return done(err);
                    }
                    token = res.body.token;
                    beforeDone();
                });
    });

    describe('#simple()', function () {
        it('should return 200 when no policies', function (done) {
            request(sails.hooks.http.app)
                    .get('/tokenTest/simple')
                    .expect(200, done);
        });
    });
    
    describe('#restricted()', function () {
        it('should return 403 when no token', function (done) {
            request(sails.hooks.http.app)
                    .get('/tokenTest/restricted')
                    .expect(403, done);
        });
        
        
        
        it('should return 200 when with token', function (done) {
            request(sails.hooks.http.app)
                    .get('/tokenTest/restricted?access_token='+token)
                    .expect(200, done);
        });   
    });
    
    
    describe('#adminOnly()', function () {
        it('should return 403 when no token', function (done) {
            request(sails.hooks.http.app)
                    .get('/tokenTest/adminOnly')
                    .expect(403, done);
        });
        
        it('should return 403 when with token', function (done) {
            request(sails.hooks.http.app)
                    .get('/tokenTest/adminOnly?access_token='+token)
                    .expect(403, done);
        });         
    });    


});