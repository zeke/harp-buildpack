var browserify = require('browserify')
  , path = require('path')
  , through = require('through')
  , fs = require('fs')
  , path = require('path');

var empty = path.join(process.cwd(), '.__empty.js');
ensureEmpty();

function ensureEmpty() {
  fs.exists(empty, function (exists) {
    if (exists) return;
    fs.writeFile(empty, '');
  });
}

module.exports = exports = browserifyStrOrFn;
function browserifyStrOrFn(strOrFn) {
  var str = strOrFn;
  if (typeof strOrFn === 'function') {
    str = [
      '(',
      strOrFn.toString(),
      ')();'
    ].join('\n');
  }
  return browserify()
    .add(empty)
    .transform(function (file) {
      if (file !== empty) {
        return through();
      }
      var t = through(
        function (data) { },
        function () {
          this.queue(str);
          this.queue(null);
        });
      return t;
    });
}
