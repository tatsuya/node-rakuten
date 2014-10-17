'use strict';

/**
 * Travel Hotel Keyword Search API
 *
 * @param {Object} options Request options
 * @version 2013-10-24
 */
function TravelHotelKeyword(options) {
  this._options = options;
}

TravelHotelKeyword.prototype.search = function(qs, callback) {
  var options = this._options;
  options.url = 'https://app.rakuten.co.jp/services/api/Travel/KeywordHotelSearch/20131024';
  options.qs = qs;
  return this.request(options, callback);
};

/**
 * Exports TravelHotelKeyword
 */
module.exports = TravelHotelKeyword;