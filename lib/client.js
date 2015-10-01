'use strict';

var request = require('request');
var version = require('../package.json').version;

function Client() {}

/**
 * Default user agent.
 */
Client.USER_AGENT = 'node-rakuten/' + version;

/**
 * Makes a request with given options and invokes callback.
 *
 * @param  {Object} options Options.
 * @param  {Function} callback
 */
Client.prototype.request = function(options, callback) {
  options = this.addUserAgent(options);
  return request(options, wrapCallback(callback));
};

/**
 * Configures request options before making a request.
 *
 * @param {object} options Options to configure.
 * @return {object} Configured options.
 * @private
 */
Client.prototype.addUserAgent = function(options) {
  options.headers = options.headers || {};
  options.headers['User-Agent'] = options.headers['User-Agent'] ?
      options.headers['User-Agent'] + ' ' + Client.USER_AGENT : Client.USER_AGENT;
  return options;
};

/**
 * Wraps the given callback to handle HTTP response
 *
 * @param  {Function} callback
 * @return {Function} Wrapped callback function
 * @private
 */
function wrapCallback(callback) {
  return function(err, res, body) {
    if (err) {
      return callback(err);
    }
    // Only application/json response should be decoded back to JSON
    try {
      body = JSON.parse(body);
    } catch (err) {}

    if (body.error) {
      // handle invalid response
      err = new Error(body.error_description);
    }

    callback(err, body);
  };
}

/**
 * Exports Client
 */
module.exports = Client;
