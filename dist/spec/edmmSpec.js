'use strict';

var _ = require('lodash');
var edmm = require('../edmm.js');

describe("Focused specs", function () {
  it("foobar", function () {
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

describe("reverseArray", function () {
  var a = [7, 2, 0, 8, 3, 5];
  it("checks that the array gets reversed", function () {
    expect(edmm.reverseArray(a)).toEqual([5, 3, 8, 0, 2, 7]);
  });

  // Additional optional test to ensure more precise lodash duplication.
  it("checks that the output is the same as lodash's output", function () {
    var copy = Object.assign([], a);
    var lodashReversed = _.reverse(copy);
    expect(edmm.reverseArray(a)).toEqual(lodashReversed);
  });
});

describe("sumArray", function () {
  var a = [7, 2, 0, 8, 3, 5];
  it("checks that the array gets summed", function () {
    expect(edmm.sumArray(a)).toEqual(25);
  });

  // Additional optional test to ensure more precise lodash duplication.
  it("checks that the output is the same as lodash's output", function () {
    var copy = Object.assign([], a);
    var lodashSum = _.sum(copy);
    expect(edmm.sumArray(a)).toEqual(lodashSum);
  });
});

describe("sumByArray", function () {
  var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
  var key = 'n';

  it("checks that the array gets summed by key", function () {
    expect(edmm.sumByArray(objects, key)).toEqual(20);
  });

  // Additional optional test to ensure more precise lodash duplication.
  it("checks that the output is the same as lodash's output", function () {
    var copy = Object.assign([], objects);
    var lodashSumBy = _.sumBy(copy, key);
    expect(edmm.sumByArray(objects, key)).toEqual(lodashSumBy);
  });
});