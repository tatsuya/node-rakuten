'use strict';

var rakuten = require('..');
var hotel = rakuten.travel.hotelkeyword('2013-10-24');
var config = require('./config.json');

// You can get a application id at
// https://webservice.rakuten.co.jp/app/list
var APPLICATION_ID = config.APPLICATION_ID;
var KEYWORD = '品川シーサイド';

hotel.search({ applicationId: APPLICATION_ID, keyword: KEYWORD }, function(err, res) {
  if (err) {
    console.log('An error occured: ', err.message);
    return;
  }
  for (var i = 0; i < res.hotels.length; i++)  {
    var hotel = res.hotels[i].hotel[0];
    var rank = i + 1;
    console.log(rank + ': ' + hotel.hotelBasicInfo.hotelName);
  }
});