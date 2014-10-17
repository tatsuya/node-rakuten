'use strict';

/**
 * Books CD Search API
 *
 * @param {Object} options Request options
 * @version 2013-05-22
 */
function BooksCD(options) {
  this._options = options;
}

BooksCD.prototype.search = function(qs, callback) {
  var options = this._options;
  options.url = 'https://app.rakuten.co.jp/services/api/BooksCD/Search/20130522';
  options.qs = qs;
  return this.request(options, callback);
};

/**
 * Exports BooksCD
 */
module.exports = BooksCD;
