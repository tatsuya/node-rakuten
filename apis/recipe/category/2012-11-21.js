'use strict';

/**
 * Recipe Category API
 *
 * @param {Object} options Request options
 * @version 2012-11-21
 */
function RecipeCategory(options) {
  this._options = options;
}

RecipeCategory.prototype.list = function(qs, callback) {
  var options = this._options;
  options.url = 'https://app.rakuten.co.jp/services/api/Recipe/CategoryList/20121121';
  options.qs = qs;
  return this.request(options, callback);
};

/**
 * Exports RecipeCategory
 */
module.exports = RecipeCategory;
