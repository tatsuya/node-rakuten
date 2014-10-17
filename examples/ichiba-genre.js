'use strict';

var rakuten = require('..');
var genre = rakuten.ichiba.genre('2014-02-22');
var config = require('./config.json');

// You can get a application id at
// https://webservice.rakuten.co.jp/app/list
var APPLICATION_ID = config.APPLICATION_ID;
var GENRE_ID = 0;

genre.search({ applicationId: APPLICATION_ID, genreId: GENRE_ID }, function(err, res) {
  if (err) {
    console.log('An error occured: ', err.message);
    return;
  }
  for (var i = 0; i < res.children.length; i++) {
    var child = res.children[i].child;
    console.log(child.genreId + ': ' + child.genreName);
  }
});