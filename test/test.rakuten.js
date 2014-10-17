'use strict';

var assert = require('assert');
var fs = require('fs');
var rakuten = require('..');

describe('rakuten', function() {
  it('should be able to create nested resouces and methods', function() {
    var item = rakuten.ichiba.item('2014-02-22');
    assert.equal(typeof item, 'object');
    assert.equal(typeof item.request, 'function');
    assert.equal(typeof item.search, 'function');
  });

  it('should accept default options and bind it to the required api modules', function() {
    var proxy = 'http://proxy.com';
    rakuten.options({ proxy: 'http://proxy.com' });
    var item = rakuten.ichiba.item('2014-02-22');
    assert.equal(item._options.proxy, proxy);
  });

  it('should be able to require all api files without error', function() {
    function getFiles(dir, files_) {
      files_ = files_ || [];
      if (typeof files_ === 'undefined') {
        files_ = [];
      }
      var files = fs.readdirSync(dir);
      for (var i in files) {
        if (!files.hasOwnProperty(i)) {
          continue;
        }
        var name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()) {
          getFiles(name, files_);
        } else {
          files_.push(name);
        }
      }
      return files_;
    }

    var api_files = getFiles(__dirname + '/../apis');

    assert.doesNotThrow(function() {
      for (var i in api_files) {
        require(api_files[i]);
      }
    });
  });
});