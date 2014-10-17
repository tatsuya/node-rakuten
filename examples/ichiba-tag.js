'use strict';

var rakuten = require('..');
var tag = rakuten.ichiba.tag('2014-02-22');
var config = require('./config.json');

// You can get a application id at
// https://webservice.rakuten.co.jp/app/list
var APPLICATION_ID = config.APPLICATION_ID;
var TAG_ID = 1000001;

tag.search({ applicationId: APPLICATION_ID, tagId: TAG_ID }, function(err, res) {
  if (err) {
    console.log('An error occured: ', err.message);
    return;
  }
  listTagGroups(res.tagGroups);
});

function listTagGroups(tagGroups) {
  for (var i = 0; i < tagGroups.length; i++) {
    var tagGroup = tagGroups[i].tagGroup;
    console.log(tagGroup.tagGroupId + ': ' + tagGroup.tagGroupName);
    listTags(tagGroup.tags);
  }
}

function listTags(tags) {
  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i].tag;
    console.log('  ' + tag.tagId + ': ' + tag.tagName);
  }
}