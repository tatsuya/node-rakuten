'use strict';

/**
 * Auction Genre Keyword Search API
 *
 * @param {Object} options Request options
 * @version 2012-09-27
 */
function AuctionGenreKeyword(options) {
  this._options = options;
}

AuctionGenreKeyword.prototype.search = function(qs, callback) {
  var options = this._options;
  options.url = 'https://app.rakuten.co.jp/services/api/AuctionGenreKeyword/Search/20120927';
  options.qs = qs;
  return this.request(options, callback);
};

/**
 * Exports AuctionGenreKeyword
 */
module.exports = AuctionGenreKeyword;
