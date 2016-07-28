'use strict';

var _ = require('lodash');
var edmm = require('../lib/isBoolean.js');

describe("isBoolean", function () {

  it('isBoolean true condition', function () {
    var isBool = true;
    expect(edmm.isBoolean(isBool)).toEqual(true);
  });
  it('isBoolean false condition', function () {
    var isBool = "fox";
    expect(edmm.isBoolean(isBool)).toEqual(false);
  });
});