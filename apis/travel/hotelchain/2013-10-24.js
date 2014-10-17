'use strict';

/**
 * Travel Hotel Chain API
 *
 * @param {Object} options Request options
 * @version 2013-10-24
 */
function TravelHotelChain(options) {
  this._options = options;
}

TravelHotelChain.prototype.list = function(qs, callback) {
  var options = this._options;
  options.url = 'https://app.rakuten.co.jp/services/api/Travel/GetHotelChainList/20131024';
  options.qs = qs;
  return this.request(options, callback);
};

/**
 * Exports TravelHotelChain
 */
module.exports = TravelHotelChain;