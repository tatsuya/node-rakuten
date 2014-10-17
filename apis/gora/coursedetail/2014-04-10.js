'use strict';

/**
 * GORA Golf Course Detail Search API
 *
 * @param {Object} options Request options
 * @version 2014-04-10
 */
function GoraGolfCourseDetail(options) {
  this._options = options;
}

GoraGolfCourseDetail.prototype.get = function(qs, callback) {
  var options = this._options;
  options.url = 'https://app.rakuten.co.jp/services/api/Gora/GoraGolfCourseDetail/20140410';
  options.qs = qs;
  return this.request(options, callback);
};

/**
 * Exports GoraGolfCourseDetail
 */
module.exports = GoraGolfCourseDetail;
