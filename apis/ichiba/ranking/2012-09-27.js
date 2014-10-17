'use strict';

/**
 * Ichiba Item Ranking API
 *
 * @param {Object} options Request options
 * @version 2012-09-27
 */
function IchibaRanking(options) {
  this._options = options;
}

IchibaRanking.prototype.get = function(qs, callback) {
  var options = this._options;
  options.url = 'https://app.rakuten.co.jp/services/api/IchibaItem/Ranking/20120927';
  options.qs = qs;
  return this.request(options, callback);
};

/**
 * Exports IchibaRanking
 */
module.exports = IchibaRanking;