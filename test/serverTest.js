'use strict';

const request = require('request');
const should = require('should');

const app = require('../app');

describe('Server', function() {
  let server;
 
  // Setup for running tests
  before(function(done) {
  	server = app.listen(3001, () => {
  		done();
  	});
  });

  after(function(done){
  	server.close(() => {
	  done();
	});
  });

  it('should return 200 on / GET', function(done) {
    request.get('http://localhost:3001', function(err, res, body) {
      should.equal(res.statusCode, 200, 'invalid statusCode');
      done();
    });
  });

  it('should return hello world on / GET', function(done) {
    request.get('http://localhost:3001', function(err, res, body) {
      should.equal(res.body, 'Hello world from Distelli & Docker!', 'invalid body');
      done();
    });
  });

  it('should return 200 on /test GET', function(done) {
    request.get('http://localhost:3001/test', function(err, res, body) {
      should.equal(res.statusCode, 200, 'invalid statusCode');
      done();
    });
  });
});
