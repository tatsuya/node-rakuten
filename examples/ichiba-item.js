'use strict';

var rakuten = require('..');
var item = rakuten.ichiba.item('2014-02-22');
var config = require('./config.json');

// You can get a application id at
// https://webservice.rakuten.co.jp/app/list
var APPLICATION_ID = config.APPLICATION_ID;
var KEYWORD = 'iphone6';
var HITS = 5;

item.search({ applicationId: APPLICATION_ID, keyword: KEYWORD, hits: HITS }, function(err, res) {
  if (err) {
    console.log('An error occured: ', err.message);
    return;
  }
  console.log('\nResult: ' + res.count + ' items found!\n');
  for (var i = 0; i < res.Items.length; i++)  {
    var item = res.Items[i].Item;
    var rank = i + 1;
    console.log(rank + ': ' + item.itemName + '\n');
  }
});