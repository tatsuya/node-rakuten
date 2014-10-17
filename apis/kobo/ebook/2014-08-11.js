'use strict';

/**
 * Kobo Ebook Search API
 *
 * @param {Object} options Request options
 * @version 2014-08-11
 */
function KoboEbook(options) {
  this._options = options;
}

KoboEbook.prototype.search = function(qs, callback) {
  var options = this._options;
  options.url = 'https://app.rakuten.co.jp/services/api/Kobo/EbookSearch/20140811';
  options.qs = qs;
  return this.request(options, callback);
};

/**
 * Exports KoboEbook
 */
module.exports = KoboEbook;
