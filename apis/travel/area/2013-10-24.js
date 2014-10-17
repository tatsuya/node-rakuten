'use strict';

/**
 * Travel Area API
 *
 * @param {Object} options Request options
 * @version 2013-10-24
 */
function TravelArea(options) {
  this._options = options;
}

TravelArea.prototype.get = function(qs, callback) {
  var options = this._options;
  options.url = 'https://app.rakuten.co.jp/services/api/Travel/GetAreaClass/20131024';
  options.qs = qs;
  return this.request(options, callback);
};

/**
 * Exports TravelArea
 */
module.exports = TravelArea;