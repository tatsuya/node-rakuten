'use strict';

/**
 * Books Genre Search API
 *
 * @param {Object} options Request options
 * @version 2013-05-22
 */
function BooksGenre(options) {
  this._options = options;
}

BooksGenre.prototype.search = function(qs, callback) {
  var options = this._options;
  options.url = 'https://app.rakuten.co.jp/services/api/BooksGenre/Search/20121128';
  options.qs = qs;
  return this.request(options, callback);
};

/**
 * Exports BooksGenre
 */
module.exports = BooksGenre;
