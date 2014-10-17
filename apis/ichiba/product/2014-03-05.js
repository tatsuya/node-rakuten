'use strict';

/**
 * Ichiba Product Search API
 *
 * @param {Object} options Request options
 * @version 2014-03-05
 */
function IchibaRanking(options) {
  this._options = options;
}

IchibaRanking.prototype.search = function(qs, callback) {
  var options = this._options;
  options.url = 'https://app.rakuten.co.jp/services/api/Product/Search/20140305';
  options.qs = qs;
  return this.request(options, callback);
};

/**
 * Exports IchibaRanking
 */
module.exports = IchibaRanking;