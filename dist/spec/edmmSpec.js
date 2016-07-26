'use strict';

var _ = require('lodash');
var edmm = require('../edmm.js');

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