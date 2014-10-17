'use strict';

/**
 * Books DVD & Blu-ray Search API
 *
 * @param {Object} options Request options
 * @version 2013-05-22
 */
function BooksDVD(options) {
  this._options = options;
}

BooksDVD.prototype.search = function(qs, callback) {
  var options = this._options;
  options.url = 'https://app.rakuten.co.jp/services/api/BooksDVD/Search/20130522';
  options.qs = qs;
  return this.request(options, callback);
};

/**
 * Exports BooksDVD
 */
module.exports = BooksDVD;