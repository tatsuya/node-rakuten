# node-rakuten

[![Build Status](https://travis-ci.org/tatsuyaoiw/node-rakuten.svg?branch=master)](https://travis-ci.org/tatsuyaoiw/node-rakuten)

An unofficial [node.js][node] client library for [Rakuten Web Service API][rakutenws].

## Installation

Install from [NPM][npm], the Node.js package manager:

```
$ npm install rakuten
```

## Example

Search for items by keyword **iphone6**:

```js
var rakuten = require('rakuten');
var item = rakuten.ichiba.item('2014-02-22');

var params = {
  applicationId: 'YOUR_APPLICATION_ID',
  keyword: 'iphone6'
};

item.search(params, function(err, res) {
  console.log(res.count + ' items found!');
});
```

See full list of examples placed under `example` directory. To run examples, you'll need to have at least one [Rakuten API App][rakutenwsappnew] and pass your own `applicationId` to `example/config.json` as a property.

## Usage

### Creating a client

Create a client object for the particular service provided by Rakuten Web Service API. For example, to use the Rakuten Ichiba Ranking API version `2012-09-27`:

```js
var rakuten = require('rakuten');
var ranking = rakuten.ichiba.ranking('2012-09-27');
```

### Using application ID

You may need to pass application ID to interact with an API. The following example makes a request to Rakuten Ichiba Item Search API with an application ID and keyword `iphone6` :

```js
var rakuten = require('rakuten');
var item = rakuten.ichiba.item('2014-02-22');

var params = {
  applicationId: 'YOUR_APPLICATION_ID',
  keyword: 'iphone6'
};

item.search(params, function(err, res) {
  console.log(res.count + ' items found!');
});
```

To get an application ID visit your [application list page][rakutenwsappid].

### Authentication

In order to access private data such as Favorite Bookmarks, you will need to have authorization through [Rakuten OAuth 2.0 API][rakutenwsauth].

#### Create OAuth 2.0 client

This library contains simple OAuth 2.0 client. Obtain auth credentials, client ID and client secrete from [registered application][rakutenwsappid] and pass them to the client with your authorization redirect URI.

```js
var rakuten = require('..');
var OAuth2Client = rakuten.auth.OAuth2;
var client = OAuth2Client({
  client_id: 'APPLICATION_ID',
  client_secret: 'APPLICATION_SECRET',
  redirect_uri: 'REDIRECT_URI'
});
```

#### Authorization URL

To ask for permissions from a user to retrieve an access token, you redirect them to a consent page. Be sure to include the **scope** that asks permissions for services. To create a consent page URL:
```js
var url = client.generateAuthUrl('rakuten_favoritebookmark_read');
console.log('Visit the url from browser: ' + url)
```

#### Get access token

With the code returned, you can ask for an access token through `getAccessToken` as shown below:

```js
client.getAccessToken(code, function(err, tokens) {
  if (!err) {
    console.log(tokens.access_token);
  }
});
```

A complete sample application that authorizes and authenticates with the OAuth2 client is available at `examples/bookmark-*.js`.

### Options

For all API calls we use [mikeal/request][mikealrequest] object and you can pass any available options in to it. For example, specifing a default proxy and timeout with 5000 milliseconds:

```js
var rakuten = require('rakuten');
rakuten.options({
  proxy: 'http://localproxy.com',
  timeout: 5000
});
var item = rakuten.ichiba.item('2014-02-22');
```

A full list of supported options can be [found here][mikealrequestopts].

## API

The following APIs and versions are currently supported:

### Ichiba

- `ichiba.item` - Ichiba Item Search API (versions: `2014-02-22`)
- `ichiba.genre` - Ichiba Genre Search API (versions: `2014-02-22`)
- `ichiba.tag` - Ichiba Tag Search API (versions: `2014-02-22`)
- `ichiba.ranking` - Ichiba Item Ranking API (versions: `2012-09-27`)
- `ichiba.itemcode` - Ichiba Item Search API (versions: `2010-08-05`)
- `ichiba.product` - Ichiba Item Search API (versions: `2014-03-05`)

### Books

- `books.item` - Books Item Search API (versions: `2013-05-22`)
- `books.book` - Books Book Search API (versions: `2013-05-22`)
- `books.cd` - Books CD Search API (versions: `2013-05-22`)
- `books.dvd` - Books DVD & Blu-ray API (versions: `2013-05-22`)
- `books.foreignbook` - Books Foreign Book Search API (versions: `2013-05-22`)
- `books.magazine` - Books Magazine Search API (versions: `2013-05-22`)
- `books.game` - Books Game Search API (versions: `2013-05-22`)
- `books.software` - Books Software Search API (versions: `2013-05-22`)
- `books.genre` - Books Genre Search API (versions: `2012-11-28`)

### Auction

- `auction.genre` - Auction Genre Search API (versions: `2012-09-27`)
- `auction.genrekeyword` - Auction Genre Keyword Search API (versions: `2012-09-27`)
- `auction.item` - Auction Item Search API (versions: `2013-09-05`)
- `auction.itemcode` - Auction Item Code Search API API (versions: `2012-10-10`)

### Travel

- `travel.hotelsimple` - Travel Hotel Simple Search API (versions: `2013-10-24`)
- `travel.hoteldetail` - Travel Hotel Detail Search API (versions: `2013-10-24`)
- `travel.hotelvacant` - Travel Vacant Hotel Search API (versions: `2013-10-24`)
- `travel.area` - Travel Area API (versions: `2013-10-24`)
- `travel.hotelkeyword` - Travel Hotel Keyword Search API (versions: `2013-10-24`)
- `travel.hotelchain` - Travel Hotel Chain API (versions: `2013-10-24`)
- `travel.hotelranking` - Travel Hotel Ranking API (versions: `2013-10-24`)

### Bookmark

- `bookmark` - Favorite Bookmark API (versions: `2012-06-27`)

### Recipe

- `recipe.category` - Recipe Category API (versions: `2012-11-21`)
- `recipe.ranking` - Recipe Ranking API (versions: `2012-11-21`)

### Kobo

- `kobo.ebook` - Kobo E-Book Search API (versions: `2014-08-11`)
- `kobo.genre` - Kobo Genre Search API (versions: `2013-10-10`)


### Gora

- `gora.course` - GORA Golf Course Search APi (versions: `2013-11-13`)
- `gora.coursedetail` - GORA Golf Course Detail API (versions: `2014-04-10`)
- `gora.plan` - GORA Golf Plan Search API (versions: `2014-04-10`)

### Dynamic Ad

- `dynamicad.ichiba` - Not implemented yet
- `dynamicad.travel` - Not implemented yet

### Affiliate

- `affiliate.highcommissionshop` - Affiliate High Commission Shop API (versions: `2013-12-05`)

## Licence

Distributed under the MIT License.

[node]: http://nodejs.org/
[npm]: https://www.npmjs.org/
[rakutenws]: http://webservice.rakuten.co.jp/
[rakutenwsappnew]: https://webservice.rakuten.co.jp/app/create
[rakutenwsappid]: https://webservice.rakuten.co.jp/app/list
[rakutenwsauth]: https://webservice.rakuten.co.jp/document/oauth
[mikealrequest]: https://github.com/mikeal/request
[mikealrequestopts]: https://github.com/mikeal/request#requestoptions-callback