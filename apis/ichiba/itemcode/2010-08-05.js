'use strict';

/**
 * Ichiba Item Code Search API
 *
 * @param {Object} options Request options
 * @version 2010-08-05
 */
function IchibaItemCode(options) {
  this._options = options;
}

/**
 * Configure required parameters if missing
 *
 * @param  {Object} qs Query string object
 * @return {Object} Modified query string object
 * @private
 */
IchibaItemCode.prototype.configure = function(qs) {
  qs = qs || {};

  // Add required parameters
  qs.operation = 'ItemCodeSearch';
  qs.version = '2010-08-05';

  // Rename applicationId to developerId
  if (!qs.developerId && qs.applicationId) {
    qs.developerId = qs.applicationId;
    delete qs.applicationId;
  }

  return qs;
};

IchibaItemCode.prototype.search = function(qs, callback) {
  var options = this._options;
  options.url = 'http://api.rakuten.co.jp/rws/3.0/json';
  options.qs = this.configure(qs);
  return this.request(options, callback);
};

/**
 * Exports IchibaItemCode
 */
module.exports = IchibaItemCode;