'use strict';

var _ = require('lodash');
var edmm = require('../lib/lessThan.js');

describe("lessThan", function () {
  it('Not a number test', function () {
    var first = 2;
    var second = "potato";
    var lodashLessThan = _.lt(first, second);
    expect(edmm.lessThan(first, second)).toEqual(lodashLessThan);
  });

  it('lessThan true condition', function () {
    var first = 2;
    var second = 10;
    expect(edmm.lessThan(first, second)).toEqual(true);
  });
  it('lessThan false condition', function () {
    var first = 5;
    var second = 3;
    expect(edmm.lessThan(first, second)).toEqual(false);
  });
});