'use strict';

/**
 * Travel Hotel Search API
 *
 * @param {Object} options Request options
 * @version 2013-10-24
 */
function TravelHotelSimple(options) {
  this._options = options;
}

TravelHotelSimple.prototype.search = function(qs, callback) {
  var options = this._options;
  options.url = 'https://app.rakuten.co.jp/services/api/Travel/SimpleHotelSearch/20131024';
  options.qs = qs;
  return this.request(options, callback);
};

/**
 * Exports TravelHotelSimple
 */
module.exports = TravelHotelSimple;