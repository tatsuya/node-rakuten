'use strict';

var request = require('request');
var version = require('../package.json').version;

function Transporter() {}

/**
 * Default user agent.
 */
Transporter.USER_AGENT = 'node-rakuten/' + version;

/**
 * Makes a request with given options and invokes callback.
 *
 * @param  {Object} options Options.
 * @param  {Function} callback
 */
Transporter.prototype.request = function(options, callback) {
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
Transporter.prototype.addUserAgent = function(options) {
  options.headers = options.headers || {};
  options.headers['User-Agent'] = options.headers['User-Agent'] ?
      options.headers['User-Agent'] + ' ' + Transporter.USER_AGENT : Transporter.USER_AGENT;
  return options;
};

/**
 * Wraps the response callback.
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
    // Only application/json response should be
    // decoded back to JSON
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
 * Exports Transporter
 */
module.exports = Transporter;
