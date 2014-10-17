'use strict';

/**
 * Auction Item Code Search API
 *
 * @param {Object} options Request options
 * @version 2012-10-10
 */
function AuctionItemCode(options) {
  this._options = options;
}

AuctionItemCode.prototype.search = function(qs, callback) {
  var options = this._options;
  options.url = 'https://app.rakuten.co.jp/services/api/AuctionItemCode/Search/20121010';
  options.qs = qs;
  return this.request(options, callback);
};

/**
 * Exports AuctionItemCode
 */
module.exports = AuctionItemCode;
