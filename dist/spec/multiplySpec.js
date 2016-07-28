'use strict';

var _ = require('lodash');
var edmm = require('../lib/multiply.js');

describe("multiply", function () {

  it('compare with lodashMultiply: NaN', function () {
    var first = 2;
    var second = "potato";
    var lodashMultiply = _.multiply(first, second);
    expect(edmm.multiply(first, second)).toEqual(lodashMultiply);
  });

  it('compare with lodashMultiply', function () {
    var first = 2;
    var second = 6;
    var lodashMultiply = _.multiply(first, second);
    expect(edmm.multiply(first, second)).toEqual(lodashMultiply);
  });
});