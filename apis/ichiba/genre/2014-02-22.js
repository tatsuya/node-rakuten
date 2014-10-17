'use strict';

/**
 * Ichiba Genre Search API
 *
 * @param {Object} options Request options
 * @version 2014-02-22
 */
function IchibaGenre(options) {
  this._options = options;
}

IchibaGenre.prototype.search = function(qs, callback) {
  var options = this._options;
  options.url = 'https://app.rakuten.co.jp/services/api/IchibaGenre/Search/20140222';
  options.qs = qs;
  return this.request(options, callback);
};

/**
 * Exports IchibaGenre
 */
module.exports = IchibaGenre;