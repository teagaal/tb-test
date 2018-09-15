const should = require('chai'),
  expect = require('chai').expect,
  request = require('supertest'),
  app = require('../app');

describe('Test API', function() {
  it('should return a 200 response', function(done) {
    request(app)
      .post('/')
      .end(function(err, res) {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.be.an('string');
        done();
      });
  });
});
