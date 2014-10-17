'use strict';

var assert = require('assert');
var Client = require('../lib/client');

describe('client', function() {
  var defaultUserAgentRE = 'node-rakuten/\\d+.\\d+.\\d+';
  var client = new Client();

  it('should set default client user agent if none is set', function() {
    var options = client.addUserAgent({});
    var re = new RegExp(defaultUserAgentRE);
    assert(re.test(options.headers['User-Agent']));
  });

  it('should append default client user agent to the existing user agent', function() {
    var applicationName = 'MyTestApplication-1.0';
    var options = client.addUserAgent({
      headers: { 'User-Agent': applicationName }
    });
    var re = new RegExp(applicationName + ' ' + defaultUserAgentRE);
    assert(re.test(options.headers['User-Agent']));
  });
});