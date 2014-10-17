'use strict';

var path = require('path');
var util = require('util');
var Client = require('../lib/client');

/**
 * Return a function that requires an API with given API version from the disk
 * @param  {String} dirname Directory name of API
 * @return {Function} Function used to require the API from the disk
 * @private
 */
function requireAPI(dirname) {
  return function(version) {
    var API;

    try {
      var apiPath = path.join(__dirname, dirname, path.basename(version));
      API = require(apiPath);
    } catch (e) {
      throw new Error(util.format('Unable to load API %s("%s"): %s',
        dirname, version, e.message));
    }

    // Extend with HTTP request utility
    API.prototype.request = function(options, callback) {
      var client = new Client();
      return client.request(options, callback);
    };

    // Bind request options to API
    return new API(this._options);
  };
}

/**
 * APIs to be exported
 * @type {Object}
 * @private
 */
var APIs = {
  'ichiba': {
    'item': requireAPI('ichiba/item'), // versions: 2014-02-22, operations: search
    'genre': requireAPI('ichiba/genre'), // versions: 2014-02-22, operations: search
    'tag': requireAPI('ichiba/tag'), // versions: 2014-02-22, operations: search
    'ranking': requireAPI('ichiba/ranking'), // versions: 2012-09-27, operations: get
    'itemcode': requireAPI('ichiba/itemcode'), // versions: 2010-08-05, operations: search
    'product': requireAPI('ichiba/product')// versions: 2014-03-05, operations: search
  },
  'books': {
    'item': requireAPI('books/item'), // versions: 2013-05-22, operations: search
    'book': requireAPI('books/book'), // versions: 2013-05-22, operations: search
    'cd': requireAPI('books/cd'), // versions: 2013-05-22, operations: search
    'dvd': requireAPI('books/dvd'), // versions: 2013-05-22, operations: search
    'foreignbook': requireAPI('books/foreignbook'), // versions: 2013-05-22, operations: search
    'magazine': requireAPI('books/magazine'), // versions: 2013-05-22, operations: search
    'game': requireAPI('books/game'), // versions: 2013-05-22, operations: search
    'software': requireAPI('books/software'), // versions: 2013-05-22, operations: search
    'genre': requireAPI('books/genre') // versions: 2012-11-28, operations: search
  },
  'auction': {
    'genre': requireAPI('auction/genre'), // versions: 2012-09-27, operations: search
    'genrekeyword': requireAPI('auction/genrekeyword'), // versions: 2012-09-27, operations: search
    'item': requireAPI('auction/item'), // versions: 2013-09-05, operations: search
    'itemcode': requireAPI('auction/itemcode') // versions: 2012-10-10, operations: search
  },
  'travel': {
    'hotelsimple': requireAPI('travel/hotelsimple'), // versions: 2013-10-24, operations: search
    'hoteldetail': requireAPI('travel/hoteldetail'), // versions: 2013-10-24, operations: search
    'hotelvacant': requireAPI('travel/hotelvacant'),// versions: 2013-10-24, operations: search
    'area': requireAPI('travel/area'), // versions: 2013-10-24, operations: get
    'hotelkeyword': requireAPI('travel/hotelkeyword'), // versions: 2013-10-24, operations: search
    'hotelchain': requireAPI('travel/hotelchain'), // versions: 2013-10-24, operations: list
    'hotelranking': requireAPI('travel/hotelranking') // versions: 2013-10-24, operations: get
  },
  'bookmark': requireAPI('bookmark'), // versions: 2012-06-27, operations: [ add, delete, list ]
  'recipe': {
    'category': requireAPI('recipe/category'), // versions: 2012-11-21, operations: list
    'ranking': requireAPI('recipe/ranking') // versions: 2012-11-21, operations: get
  },
  'kobo': {
    'ebook': requireAPI('kobo/ebook'), // versions: 2014-08-11, operations: search
    'genre': requireAPI('kobo/genre') // versions: 2013-10-10, operations: search
  },
  'gora': {
    'course': requireAPI('gora/course'), // versions: 2013-11-13, operations: search
    'coursedetail': requireAPI('gora/coursedetail'), // versions: 2014-04-10, operations: get
    'plan': requireAPI('gora/plan') // versions: 2014-04-10, operations: search
  },
  'affiliate': {
    'highcommissionshop': requireAPI('affiliate/highcommissionshop') // version: 2013-12-05, operations: list
  }
};

/**
 * Exports the APIs
 * @type {Object}
 */
module.exports = APIs;