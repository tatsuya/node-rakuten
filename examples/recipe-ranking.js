'use strict';

var rakuten = require('..');
var ranking = rakuten.recipe.ranking('2012-11-21');
var config = require('./config.json');

// You can get a application id at
// https://webservice.rakuten.co.jp/app/list
var APPLICATION_ID = config.APPLICATION_ID;

ranking.get({ applicationId: APPLICATION_ID }, function(err, res) {
  if (err) {
    console.log('An error occured: ', err.message);
    return;
  }
  for (var i = 0; i < res.result.length; i++) {
    var recipe = res.result[i];
    var rank = i + 1;
    console.log(rank + ': ' + recipe.recipeTitle);
  }
});