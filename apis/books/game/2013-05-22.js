'use strict';

/**
 * Books Game Search API
 *
 * @param {Object} options Request options
 * @version 2013-05-22
 */
function BooksGame(options) {
  this._options = options;
}

BooksGame.prototype.search = function(qs, callback) {
  var options = this._options;
  options.url = 'https://app.rakuten.co.jp/services/api/BooksGame/Search/20130522';
  options.qs = qs;
  return this.request(options, callback);
};

/**
 * Exports BooksGame
 */
module.exports = BooksGame;
