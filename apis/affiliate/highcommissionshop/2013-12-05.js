'use strict';

/**
 * Affiliate High Commission Shop API
 *
 * @param {Object} options Request options
 * @version 2013-12-05
 */
function AffiliateHighComissionShop(options) {
  this._options = options;
}

AffiliateHighComissionShop.prototype.list = function(qs, callback) {
  var options = this._options;
  options.url = 'https://app.rakuten.co.jp/services/api/HighCommissionShop/List/20131205';
  options.qs = qs;
  return this.request(options, callback);
};

/**
 * Exports AffiliateHighComissionShop
 */
module.exports = AffiliateHighComissionShop;