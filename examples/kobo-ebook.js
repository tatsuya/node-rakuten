'use strict';

var rakuten = require('..');
var ebook = rakuten.kobo.ebook('2014-08-11');
var config = require('./config.json');

// You can get a application id at
// https://webservice.rakuten.co.jp/app/list
var APPLICATION_ID = config.APPLICATION_ID;
var KEYWORD = 'nodejs';

ebook.search({ applicationId: APPLICATION_ID, keyword: KEYWORD }, function(err, res) {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('Result: ' + res.count + ' items found!\n');
  for (var i = 0; i < res.Items.length; i++)  {
    var item = res.Items[i].Item;
    var rank = i + 1;
    console.log(rank + ': ' + item.title);
  }
});
