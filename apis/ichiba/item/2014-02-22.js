'use strict';

/**
 * Ichiba Item Search API
 *
 * @param {Object} options Request options
 * @version 2014-02-22
 */
function IchibaItem(options) {
  this._options = options;
}

IchibaItem.prototype.search = function(qs, callback) {
  var options = this._options;
  options.url = 'https://app.rakuten.co.jp/services/api/IchibaItem/Search/20140222';
  options.qs = qs;
  return this.request(options, callback);
};

/**
 * Exports IchibaItem
 */
module.exports = IchibaItem;
