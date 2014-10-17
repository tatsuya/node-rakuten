'use strict';

/**
 * Auction Genre Search API
 *
 * @param {Object} options Request options
 * @version 2012-09-27
 */
function AuctionGenre(options) {
  this._options = options;
}

AuctionGenre.prototype.search = function(qs, callback) {
  var options = this._options;
  options.url = 'https://app.rakuten.co.jp/services/api/AuctionGenreId/Search/20120927';
  options.qs = qs;
  return this.request(options, callback);
};

/**
 * Exports AuctionGenre
 */
module.exports = AuctionGenre;
