'use strict';

var _ = require('lodash');
var edmm = require('../edmm.js');

describe("example", function () {
  a = [7, 2, 0, 8, 3, 5];

  xit("checks that the array gets reversed", function () {
    expect(edmm.reverseArray(a)).toEqual([5, 3, 8, 0, 2, 7]);
  });

  it("checks that the output is the same as lodash's output", function () {
    console.log('edmm.reverseArray(a) is', edmm.reverseArray(a));
    expect(edmm.reverseArray(a)).toEqual(_.reverse(a));
  });
});