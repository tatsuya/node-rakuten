'use strict';

var assert = require('assert');
var url = require('url');
var qs = require('querystring');
var rakuten = require('..');

describe('oauth2client', function() {

  var CLIENT_ID = 'CLIENT_ID';
  var CLIENT_SECRET = 'CLIENT_SECRET';
  var REDIRECT_URI = 'REDIRECT_URI';
  var SCOPE = 'SCOPE';

  it('should generate a valid consent page url', function() {
    var client = new rakuten.auth.OAuth2({
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      redirect_uri: REDIRECT_URI
    });

    var generated = client.generateAuthURL(SCOPE);
    var parsed = url.parse(generated);
    var query = qs.parse(parsed.query);

    assert.equal(query.response_type, 'code');
    assert.equal(query.scope, SCOPE);
    assert.equal(query.client_id, CLIENT_ID);
    assert.equal(query.redirect_uri, REDIRECT_URI);
  });
});