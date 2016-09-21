var assert = require('assert'),
    request = require('./index.js');

describe('Test get', function() {
    it('Validation type of function request', function() {
        assert.equal(typeof request, 'function');
    });

    it('Test request get to google', function(done) {
      request('http://api-staging.nitnot.id/api',function(body, res){
        assert.equal(typeof body, 'string');
        done()
      })
    });
})
