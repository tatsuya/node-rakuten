'use strict';

/**
 * GORA Golf Plan Search API
 *
 * @param {Object} options Request options
 * @version 2014-04-10
 */
function GoraGolfPlan(options) {
  this._options = options;
}

GoraGolfPlan.prototype.search = function(qs, callback) {
  var options = this._options;
  options.url = 'https://app.rakuten.co.jp/services/api/Gora/GoraPlanSearch/20140410';
  options.qs = qs;
  return this.request(options, callback);
};

/**
 * Exports GoraGolfPlan
 */
module.exports = GoraGolfPlan;
