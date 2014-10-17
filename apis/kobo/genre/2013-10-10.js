'use strict';

/**
 * Kobo Genre Search API
 *
 * @param {Object} options Request options
 * @version 2013-10-10
 */
function KoboGenre(options) {
  this._options = options;
}

KoboGenre.prototype.search = function(qs, callback) {
  var options = this._options;
  options.url = 'https://app.rakuten.co.jp/services/api/Kobo/GenreSearch/20131010';
  options.qs = qs;
  return this.request(options, callback);
};

/**
 * Exports KoboGenre
 */
module.exports = KoboGenre;
