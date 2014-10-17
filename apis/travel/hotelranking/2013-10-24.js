'use strict';

/**
 * Travel Hotel Ranking API
 *
 * @param {Object} options Request options
 * @version 2013-10-24
 */
function TravelHotelRanking(options) {
  this._options = options;
}

TravelHotelRanking.prototype.get = function(qs, callback) {
  var options = this._options;
  options.url = 'https://app.rakuten.co.jp/services/api/Travel/HotelRanking/20131024';
  options.qs = qs;
  return this.request(options, callback);
};

/**
 * Exports TravelHotelRanking
 */
module.exports = TravelHotelRanking;