'use strict';

var readline = require('readline');

var rakuten = require('..');
var bookmark = rakuten.bookmark('2012-06-27');
var config = require('./config.json');

// Client ID and client secret are available at
// https://webservice.rakuten.co.jp/app/list
var oauth2Client = new rakuten.auth.OAuth2({
  client_id: config.APPLICATION_ID,
  client_secret: config.APPLICATION_SECRET,
  redirect_uri: config.REDIRECT_URI
});

// The bookmarkId to be removed
var BOOKMARK_ID = '123456';

// Creates a readline interface instance
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getAccessToken(client, callback) {
  // Generate consent page url with a scope of
  // read access for Rakuten Bookmark API
  var url = client.generateAuthURL('rakuten_favoritebookmark_update');
  console.log('Open the following URL in your browser, then paste the resulting authorization code below:\n\n' + url + '\n');
  rl.question('Rakuten Authorization code: ', function(code) {
    // Exchange code for access token
    client.getAccessToken(code, callback);
  });
}

// Retrieve an access token
getAccessToken(oauth2Client, function(err, tokens) {
  if (err) {
    console.log(err.message);
    rl.close();
  }
  // `tokens` should look like:
  // {
  //   "access_token": "bfm0UzoBox-3pn2aOQ8vqaYVFukzvxac1kda1n_f6js",
  //   "refresh_token": "KgfbypOlO99Xoap50DkvkR_7zSJvKOpa1mhFgt-xOfc",
  //   "token_type": "BEARER",
  //   "expires_in": 299
  // }
  bookmark.delete({ access_token: tokens.access_token, bookmarkId: BOOKMARK_ID }, function(err, res) {
    if (err) {
      console.log(err.message);
      rl.close();
    }
    var count = res.affectedCount;
    if (!count) {
      console.log('A bookmark cannot be deleted');
    } else {
      console.log(count + ' bookmark(s) are deleted');
    }
    rl.close();
  });
});