'use strict';

/**
 * Travel Vacant Hotel Search API
 *
 * @param {Object} options Request options
 * @version 2013-10-24
 */
function TravelHotelVacant(options) {
  this._options = options;
}

TravelHotelVacant.prototype.search = function(qs, callback) {
  var options = this._options;
  options.url = 'https://app.rakuten.co.jp/services/api/Travel/VacantHotelSearch/20131024';
  options.qs = qs;
  return this.request(options, callback);
};

/**
 * Exports TravelHotelVacant
 */
module.exports = TravelHotelVacant;