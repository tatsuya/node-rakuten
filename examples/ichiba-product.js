'use strict';

var rakuten = require('..');
var product = rakuten.ichiba.product('2014-03-05');
var config = require('./config.json');

// You can get a application id at
// https://webservice.rakuten.co.jp/app/list
var APPLICATION_ID = config.APPLICATION_ID;
var KEYWORD = 'iphone6';
var HITS = 5;

product.search({ applicationId: APPLICATION_ID, keyword: KEYWORD, hits: HITS }, function(err, res) {
  if (err) {
    console.log('An error occured: ', err.message);
    return;
  }
  console.log('\nResult: ' + res.count + ' products found!\n');
  for (var i = 0; i < res.Products.length; i++) {
    var product = res.Products[i].Product;
    var rank = i + 1;
    console.log(rank + ': ' + product.productName + '\n');
  }
});