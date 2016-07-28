'use strict';

var _ = require('lodash');
var edmm = require('../lib/sortedIndex.js');

describe("sortedIndex", function () {
  it("Returns the index at which value should be inserted into array", function () {
    expect(edmm.sortedIndex([30, 50], 40)).toEqual(1);
  });
});