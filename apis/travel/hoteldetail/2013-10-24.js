'use strict';

/**
 * Travel Hotel Detail Search API
 *
 * @param {Object} options Request options
 * @version 2013-10-24
 */
function TravelHotelDetail(options) {
  this._options = options;
}

TravelHotelDetail.prototype.search = function(qs, callback) {
  var options = this._options;
  options.url = 'https://app.rakuten.co.jp/services/api/Travel/HotelDetailSearch/20131024';
  options.qs = qs;
  return this.request(options, callback);
};

/**
 * Exports TravelHotelDetail
 */
module.exports = TravelHotelDetail;