'use strict';

/**
 * Bookmark API
 *
 * @param {Object} options Request options
 * @version 2012-06-27
 */
function Bookmark(options) {
  this._options = options;
}

/**
 * Get a list of bookmarks
 *
 * @param {Object} qs Query parameters
 * @param {Function} callback
 */
Bookmark.prototype.list = function(qs, callback) {
  var options = this._options;
  options.url = 'https://app.rakuten.co.jp/services/api/FavoriteBookmark/List/20120627';
  options.qs = qs;
  return this.request(options, callback);
};

/**
 * Add a bookmark
 *
 * @param {Object} qs Query parameters
 * @param {Function} callback
 */
Bookmark.prototype.add = function(qs, callback) {
  var options = this._options;
  options.url = 'https://app.rakuten.co.jp/services/api/FavoriteBookmark/Add/20120627';
  options.qs = qs;
  return this.request(options, callback);
};

/**
 * Delete a bookmark
 *
 * @param {Object} qs Query parameters
 * @param {Function} callback
 */
Bookmark.prototype.delete = function(qs, callback) {
  var options = this._options;
  options.url = 'https://app.rakuten.co.jp/services/api/FavoriteBookmark/Delete/20120627';
  options.qs = qs;
  return this.request(options, callback);
};

/**
 * Exports Bookmark
 */
module.exports = Bookmark;