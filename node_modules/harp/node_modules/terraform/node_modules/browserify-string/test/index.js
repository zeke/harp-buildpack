var expect = require('chai').expect
  , browserifyFn = require('..');

describe('Browserify String', function () {
  it('should be able to return a browserify instance with functions',
    function(done) {
      function browserCode() {
        var domready = require('domready');
        domready(function () {
          console.log('ready');
        });
      }
      browserifyFn(browserCode)
        .bundle(function (err, src) {
          if (err) return done(err);
          expect(src).to.include(browserCode.toString());
          expect(src).to.include('domready (c) Dustin Diaz 2012 - License MIT');
          done();
        });
    });

  it('should be able to return a browserify instance with strings',
    function(done) {
      function browserCode() {
        var domready = require('domready');
        domready(function () {
          console.log('ready');
        });
      }
      browserifyFn(browserCode.toString())
        .bundle(function (err, src) {
          if (err) return done(err);
          expect(src).to.include(browserCode.toString());
          expect(src).to.include('domready (c) Dustin Diaz 2012 - License MIT');
          done();
        });
    });
});
