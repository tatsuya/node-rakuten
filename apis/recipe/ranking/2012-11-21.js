'use strict';

/**
 * Recipe Ranking API
 *
 * @param {Object} options Request options
 * @version 2012-11-21
 */
function RecipeRanking(options) {
  this._options = options;
}

RecipeRanking.prototype.get = function(qs, callback) {
  var options = this._options;
  options.url = 'https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20121121';
  options.qs = qs;
  return this.request(options, callback);
};

/**
 * Exports RecipeRanking
 */
module.exports = RecipeRanking;
