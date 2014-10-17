'use strict';

/**
 * Books Book Search API
 *
 * @param {Object} options Request options
 * @version 2013-05-22
 */
function BooksBook(options) {
  this._options = options;
}

BooksBook.prototype.search = function(qs, callback) {
  var options = this._options;
  options.url = 'https://app.rakuten.co.jp/services/api/BooksBook/Search/20130522';
  options.qs = qs;
  return this.request(options, callback);
};

/**
 * Exports BooksBook
 */
module.exports = BooksBook;
