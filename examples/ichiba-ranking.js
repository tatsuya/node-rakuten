'use strict';

var rakuten = require('..');
var ranking = rakuten.ichiba.ranking('2012-09-27');
var config = require('./config.json');

// You can get a application id at
// https://webservice.rakuten.co.jp/app/list
var APPLICATION_ID = config.APPLICATION_ID;

ranking.get({ applicationId: APPLICATION_ID }, function(err, res) {
  if (err) {
    console.log('An error occured: ', err.message);
    return;
  }
  console.log('\n  Last updated: ' + res.lastBuildDate + '\n');
  for (var i = 0; i < 5; i++) {
    var item = res.Items[i].Item;
    var rank = i + 1;
    console.log('  ' + rank + ': ' + item.itemName + '\n');
  }
});