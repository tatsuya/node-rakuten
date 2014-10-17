'use strict';

/**
 * Books Foreign Book Search API
 *
 * @param {Object} options Request options
 * @version 2013-05-22
 */
function BooksForeignBook(options) {
  this._options = options;
}

BooksForeignBook.prototype.search = function(qs, callback) {
  var options = this._options;
  options.url = 'https://app.rakuten.co.jp/services/api/BooksForeignBook/Search/20130522';
  options.qs = qs;
  return this.request(options, callback);
};

/**
 * Exports BooksForeignBook
 */
module.exports = BooksForeignBook;