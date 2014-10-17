'use strict';

/**
 * Ichiba Tag Search API
 *
 * @param {Object} options Request options
 * @version 2014-02-22
 */
function IchibaTag(options) {
  this._options = options;
}

IchibaTag.prototype.search = function(qs, callback) {
  var options = this._options;
  options.url = 'https://app.rakuten.co.jp/services/api/IchibaTag/Search/20140222';
  options.qs = qs;
  return this.request(options, callback);
};

/**
 * Exports IchibaTag
 */
module.exports = IchibaTag;