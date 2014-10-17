'use strict';

/**
 * Books Magazine Search API
 *
 * @param {Object} options Request options
 * @version 2013-05-22
 */
function BooksMagazine(options) {
  this._options = options;
}

BooksMagazine.prototype.search = function(qs, callback) {
  var options = this._options;
  options.url = 'https://app.rakuten.co.jp/services/api/BooksMagazine/Search/20130522';
  options.qs = qs;
  return this.request(options, callback);
};

/**
 * Exports BooksMagazine
 */
module.exports = BooksMagazine;
