'use strict';

/**
 * Books Item Search API
 *
 * @param {Object} options Request options
 * @version 2013-05-22
 */
function BooksItem(options) {
  this._options = options;
}

BooksItem.prototype.search = function(qs, callback) {
  var options = this._options;
  options.url = 'https://app.rakuten.co.jp/services/api/BooksTotal/Search/20130522';
  options.qs = qs;
  return this.request(options, callback);
};

/**
 * Exports BooksItem
 */
module.exports = BooksItem;
