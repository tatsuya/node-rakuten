'use strict';

/**
 * GORA Golf Course Search API
 *
 * @param {Object} options Request options
 * @version 2013-11-13
 */
function GoraGolfCourse(options) {
  this._options = options;
}

GoraGolfCourse.prototype.search = function(qs, callback) {
  var options = this._options;
  options.url = 'https://app.rakuten.co.jp/services/api/Gora/GoraGolfCourseSearch/20131113';
  options.qs = qs;
  return this.request(options, callback);
};

/**
 * Exports GoraGolfCourse
 */
module.exports = GoraGolfCourse;
