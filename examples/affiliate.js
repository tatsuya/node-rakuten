'use strict';

var rakuten = require('..');
var shops = rakuten.affiliate.highcommissionshop('2013-12-05');
var config = require('./config.json');

// You can get a application id at
// https://webservice.rakuten.co.jp/app/list
var APPLICATION_ID = config.APPLICATION_ID;

shops.list({ applicationId: APPLICATION_ID }, function(err, res) {
  if (err) {
    console.log('An error occured: ', err.message);
    return;
  }
  for (var i = 0; i < res.Shops.length; i++) {
    var shop = res.Shops[i].Shop;
    var rank = i + 1;
    console.log(rank + ': ' + shop.shopName);
  }
});