'use strict';

var rakuten = require('..');
var itemcode = rakuten.ichiba.itemcode('2010-08-05');
var config = require('./config.json');

// You can get a application id at
// https://webservice.rakuten.co.jp/app/list
var APPLICATION_ID = config.APPLICATION_ID;
var ITEM_CODE = 'angfa:10000025';

itemcode.search({ applicationId: APPLICATION_ID, itemCode: ITEM_CODE }, function(err, res) {
  if (err) {
    console.log('An error occured: ', err.message);
    return;
  }

  var body = res.Body;
  if (!body) {
    console.log('Empty body');
    return;
  }

  for (var i = 0; i < body.ItemCodeSearch.Items.Item.length; i++) {
    var item = body.ItemCodeSearch.Items.Item[i];
    console.log(item.itemName);
  }
});