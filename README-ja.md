# node-rakuten

[![Build Status](https://travis-ci.org/tatsuyaoiw/node-rakuten.svg?branch=master)](https://travis-ci.org/tatsuyaoiw/node-rakuten)

楽天ウェブサービスAPI用[Node.js][node]クライアント（非公式）

## インストール

[npm][npm]からインストール:

```
$ npm install rakuten
```

## 例

楽天の商品をキーワード **iphone6** で検索:

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

その他の例については `example` ディレクトリ以下を参照してください。サンプルを実行するには、[楽天ウェブサービスのアプリ][rakutenwsappnew]の登録が必要です。取得した `applicationId` を `examples/config.json` 内のプロパティに設定してください。

## 使い方

### クライアントの作成

楽天ウェブサービスAPIで提供されている各種サービス用のクライアントオブジェクトを生成します。例えば、楽天市場ランキングAPI - バージョン `2012-09-27` を使う場合:

```js
var rakuten = require('rakuten');
var ranking = rakuten.ichiba.ranking('2012-09-27');
```

### アプリケーションIDの追加

APIへのアクセスには、アプリID（applicationId）パラメータが必要となります。以下の例では、楽天市場商品検索APIに対して、アプリIDとキーワード `iphone6` を使ってリクエストを送信します:

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

アプリIDを確認するには、[アプリ情報の確認ページ][rakutenwsappid]を参照してください。

## ユーザー認証

お気に入りブックマークAPIなど、ユーザの許可が必要な情報にアクセスする場合、[OAuth 2.0][rakutenwsauth]による認証が必要です。

### OAuth 2.0 クライアントの生成

このライブラリには、シンプルなOAuth 2.0用クライアントの実装が含まれています。認証に必要なアプリIDやシークレットキー、リダイレクト用URLなどの情報を[アプリ情報の確認ページ][rakutenwsappid]から取得し、クライアント作成時のパラメータとして追加してください。

```js
var rakuten = require('rakuten');
var OAuth2Client = rakuten.auth.OAuth2;
var client = OAuth2Client({
  client_id: 'APPLICATION_ID',
  client_secret: 'APPLICATION_SECRET',
  redirect_uri: 'REDIRECT_URI'
});
```

### 認証用URLの発行

ユーザー情報の利用を確認、認証してもらうためのページへユーザーを誘導します。その際、必ずデータの利用範囲である **scope** を追加するのを忘れないようにしてください。認証ページのURLの発行例:

```js
var url = client.generateAuthURL('rakuten_favoritebookmark_read');
console.log('Visit the url from browser: ' + url)
```

### アクセストークンの取得

ユーザ認証を終えると、リダイレクト用のURLに専用のコードがパラメータとして返却されます。返却されたコードを `getAccessToken` 関数の引数として渡し、アクセストークンを取得します:

```js
client.getAccessToken(code, function(err, tokens) {
  if (!err) {
    console.log(tokens.access_token);
  }
});
```

OAuth 2.0を使ったサンプルコードは `examples/bookmark-*.js` を参照してください。

## オプション

全てのAPIにコールに対して、[mikeal/request][mikealrequest] モジュールのオブジェクトを使用しており、このオブジェクトで利用可能な様々なオプションを追加すること可能です。例えば、プロキシと5000ミリ秒（5秒）のタイムアウトを設定したい場合:


```js
var rakuten = require('rakuten');
rakuten.options({
  proxy: 'http://localproxy.com',
  timeout: 5000
});
var item = rakuten.ichiba.item('2014-02-22');
```

サポートされているオプションの一覧は[こちら][mikealrequestopts]で確認できます。

## API

現在サポートされているAPIおよびバージョンは以下のとおりです:

### 楽天市場

- `ichiba.item` - 楽天市場商品検索API (versions: `2014-02-22`)
- `ichiba.genre` - 楽天市場ジャンル検索API (versions: `2014-02-22`)
- `ichiba.tag` - 楽天市場タグ検索API (versions: `2014-02-22`)
- `ichiba.ranking` - 楽天市場ランキングAPI (versions: `2012-09-27`)
- `ichiba.itemcode` - 楽天商品コード検索API (versions: `2010-08-05`)
- `ichiba.product` - 楽天プロダクト製品検索API (versions: `2014-03-05`)

### 楽天ブックス

- `books.item` - 楽天ブックス総合検索API (versions: `2013-05-22`)
- `books.book` - 楽天ブックス書籍検索API (versions: `2013-05-22`)
- `books.cd` - 楽天ブックスCD検索API (versions: `2013-05-22`)
- `books.dvd` - 楽天ブックスDVD/Blu-ray検索API (versions: `2013-05-22`)
- `books.foreignbook` - 楽天ブックス洋書検索API (versions: `2013-05-22`)
- `books.magazine` - 楽天ブックス雑誌検索API (versions: `2013-05-22`)
- `books.game` - 楽天ブックスゲーム検索API (versions: `2013-05-22`)
- `books.software` - 楽天ブックスソフトウェア検索API (versions: `2013-05-22`)
- `books.genre` - 楽天ブックスジャンル検索API (versions: `2012-11-28`)

### 楽天オークション

- `auction.genre` - 楽天オークションジャンル検索API (versions: `2012-09-27`)
- `auction.genrekeyword` - 楽天オークションジャンルキーワード検索API (versions: `2012-09-27`)
- `auction.item` - 楽天オークション商品検索API (versions: `2013-09-05`)
- `auction.itemcode` - 楽天オークション商品コード検索API (versions: `2012-10-10`)

### 楽天トラベル

- `travel.hotelsimple` - 楽天トラベル施設検索API (versions: `2013-10-24`)
- `travel.hoteldetail` - 楽天トラベル施設情報API (versions: `2013-10-24`)
- `travel.hotelvacant` - 楽天トラベル空室検索API (versions: `2013-10-24`)
- `travel.area` - 楽天トラベル地区コードAPI (versions: `2013-10-24`)
- `travel.hotelkeyword` - 楽天トラベルキーワード検索API (versions: `2013-10-24`)
- `travel.hotelchain` - 楽天トラベルホテルチェーンAPI (versions: `2013-10-24`)
- `travel.hotelranking` - 楽天トラベルランキングAPI (versions: `2013-10-24`)

### 楽天ブックマーク

- `bookmark` - お気に入りブックマークAPI (versions: `2012-06-27`)

### 楽天レシピ

- `recipe.category` - カテゴリ一覧API (versions: `2012-11-21`)
- `recipe.ranking` - カテゴリ別ランキングAPI (versions: `2012-11-21`)

### 楽天Kobo

- `kobo.ebook` - 楽天Kobo電子書籍検索API (versions: `2014-08-11`)
- `kobo.genre` - 楽天Koboジャンル検索API (versions: `2013-10-10`)


### 楽天GORA

- `gora.course` - 楽天GORAゴルフ場検索API (versions: `2013-11-13`)
- `gora.coursedetail` - 楽天GORAゴルフ場詳細API (versions: `2014-04-10`)
- `gora.plan` - 楽天GORAプラン検索API (versions: `2014-04-10`)

### 楽天ダイナミックアド

- `dynamicad.ichiba` - 未実装
- `dynamicad.travel` - 未実装

### 楽天アフィリエイト

- `affiliate.highcommissionshop` - 楽天アフィリエイト高料率ショップAPI (versions: `2013-12-05`)

## ライセンス

MIT

[node]: http://nodejs.org/
[npm]: https://www.npmjs.org/
[rakutenws]: http://webservice.rakuten.co.jp/
[rakutenwsappnew]: https://webservice.rakuten.co.jp/app/create
[rakutenwsappid]: https://webservice.rakuten.co.jp/app/list
[rakutenwsauth]: https://webservice.rakuten.co.jp/document/oauth
[mikealrequest]: https://github.com/mikeal/request
[mikealrequestopts]: https://github.com/mikeal/request#requestoptions-callback
