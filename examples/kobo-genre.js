'use strict';

var rakuten = require('..');
var ebook = rakuten.kobo.genre('2013-10-10');
var config = require('./config.json');

// You can get a application id at
// https://webservice.rakuten.co.jp/app/list
var APPLICATION_ID = config.APPLICATION_ID;
var KOBO_GENRE_ID = 101;

ebook.search({ applicationId: APPLICATION_ID, koboGenreId: KOBO_GENRE_ID }, function(err, res) {
  if (err) {
    console.log(err.message);
    return;
  }
  for (var i = 0; i < res.children.length; i++) {
    var child = res.children[i].child;
    console.log(child.koboGenreId + ': ' + child.koboGenreName);
  }
});
