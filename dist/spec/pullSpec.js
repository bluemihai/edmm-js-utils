'use strict';

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _pull = require('../lib/pull.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("pull", function () {
  var dev = ['D', 'e', 'v', 'l', 'o', 'p'];
  var L = 'l';
  var P = 'p';
  it("Removes all given values from array.", function () {
    expect((0, _pull.pull)(dev, L, P)).toEqual(['D', 'e', 'v', 'o']);
  });
  it("checks that our pull is the same as lodash's pull", function () {
    var lodashPull = _lodash2.default.pull(dev, L);
    expect((0, _pull.pull)(dev, L)).toEqual(lodashPull);
  });
});