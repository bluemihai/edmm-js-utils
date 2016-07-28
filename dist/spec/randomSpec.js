'use strict';

var _ = require('lodash');
var edmm = require('../lib/random.js');

describe("random", function () {
  it("it return number in expected range", function () {
    // From http://stackoverflow.com/questions/3746725/create-a-javascript-array-containing-1-n
    var foo = Array.from(Array(30).keys());
    var randoms = foo.map(function (k) {
      return edmm.random(6);
    });
    var results = {};
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = randoms[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var r = _step.value;

        expect(r).toBeGreaterThan(-1);
        expect(r).toBeLessThan(7);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  });
});