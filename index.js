'use strict';

/**
 * Load the apis.
 */
var apis = require('./apis');
var OAuth2client = require('./lib/oauth2client');

/**
 * Rakuten API constructor.
 */
function RakutenAPIs() {
  this._options = {};
  this.addAPIs(apis, this);
  this.auth = {
    OAuth2: require('./lib/oauth2client')
  };
}

/**
 * Add APIs to given parent object
 * E.g. rakutenapis.ichiba.item and rakutenapis.bookmark
 *
 * @param  {Object|Function} apis APIs to be added
 * @param  {Object} context
 * @private
 */
RakutenAPIs.prototype.addAPIs = function(apis, parent) {
  for (var apiName in apis) {
    var api = apis[apiName];
    var type = typeof api;
    if (type === 'object') {
      this[apiName] = {};
      this.addAPIs(api, this[apiName]);
    } else if (type === 'function') {
      parent[apiName] = api.bind(this);
    }
  }
};

/**
 * Specify default options to be applied directly to the mikeal/request object
 *
 * @param {Object} options
 */
RakutenAPIs.prototype.options = function(options) {
  this._options = options || {};
};

/**
 * Exports Rakuten APIs
 * @type {RakutenAPIs}
 */
module.exports = new RakutenAPIs();