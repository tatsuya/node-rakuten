'use strict';

var qs = require('querystring');
var Client = require('./client');

/**
 * An OAuth2 client.
 *
 * @param {String} clientId The applicationId that you obtain from https://webservice.rakuten.co.jp/app/list
 * @param {String} clientSecret The application_secret that you obtain from https://webservice.rakuten.co.jp/app/list
 * @param {String} redirectUri The URI that you specify in https://webservice.rakuten.co.jp/app/list that determines where the response is sent.
 */
function OAuth2Client(options) {
  this.clientId = options.client_id;
  this.clientSecret = options.client_secret;
  this.redirectUri = options.redirect_uri;
}

/**
 * The base URL for auth endpoints.
 * @const
 * @private
 */
OAuth2Client.RAKUTEN_OAUTH2_AUTH_URL = 'https://app.rakuten.co.jp/services/authorize';

/**
 * The base URL for token retrieval.
 * @const
 * @private
 */
OAuth2Client.RAKUTEN_OAUTH2_TOKEN_URL = 'https://app.rakuten.co.jp/services/token';

/**
 * Send a HTTP request
 *
 * @param  {Object} options Options that can be applied to the mikeal/request
 * @param  {Function} callback
 * @return {Function} request
 */
OAuth2Client.prototype.request =  function(options, callback) {
  this.client = new Client();
  return this.client.request(options, callback);
};

/**
 * Generates URL for consent page landing.
 *
 * @param {String} scope Scope for API
 * @return {String} URL to consent page
 */
OAuth2Client.prototype.generateAuthURL = function(scope) {
  var params = {
    response_type: 'code',
    client_id: this.clientId,
    scope: scope,
    redirect_uri: this.redirectUri
  };
  var baseUrl = OAuth2Client.RAKUTEN_OAUTH2_AUTH_URL;
  return baseUrl + '?' + qs.stringify(params);
};

/**
 * Get the access token for given code.
 *
 * @param  {String} code The authorization code
 * @param  {Function} callback
 */
OAuth2Client.prototype.getAccessToken = function(code, callback) {
  var params = {
    grant_type: 'authorization_code',
    client_id: this.clientId,
    client_secret: this.clientSecret,
    code: code,
    redirect_uri: this.redirectUri
  };
  var options = {
    method: 'POST',
    url: OAuth2Client.RAKUTEN_OAUTH2_TOKEN_URL,
    form: params
  };
  this.request(options, callback);
};

/**
 * Exports OAuth2Client
 */
module.exports = OAuth2Client;
