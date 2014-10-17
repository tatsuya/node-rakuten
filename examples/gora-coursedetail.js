'use strict';

var rakuten = require('..');
var coursedetail = rakuten.gora.coursedetail('2014-04-10');
var config = require('./config.json');

// You can get a application id at
// https://webservice.rakuten.co.jp/app/list
var APPLICATION_ID = config.APPLICATION_ID;
var GOLF_COURSE_ID = 90027;

coursedetail.get({ applicationId: APPLICATION_ID, golfCourseId: GOLF_COURSE_ID }, function(err, res) {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log(res.Item);
});