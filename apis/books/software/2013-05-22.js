'use strict';

/**
 * Books Software Search API
 *
 * @param {Object} options Request options
 * @version 2013-05-22
 */
function BooksSoftware(options) {
  this._options = options;
}

BooksSoftware.prototype.search = function(qs, callback) {
  var options = this._options;
  options.url = 'https://app.rakuten.co.jp/services/api/BooksSoftware/Search/20130522';
  options.qs = qs;
  return this.request(options, callback);
};

/**
 * Exports BooksSoftware
 */
module.exports = BooksSoftware;
