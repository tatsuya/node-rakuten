'use strict';

/**
 * Auction Item Search API
 *
 * @param {Object} options Request options
 * @version 2013-09-05
 */
function AuctionItem(options) {
  this._options = options;
}

AuctionItem.prototype.search = function(qs, callback) {
  var options = this._options;
  options.url = 'https://app.rakuten.co.jp/services/api/AuctionItem/Search/20130905';
  options.qs = qs;
  return this.request(options, callback);
};

/**
 * Exports AuctionItem
 */
module.exports = AuctionItem;
