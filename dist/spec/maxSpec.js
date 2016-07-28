'use strict';

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _max = require('../lib/max.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("max", function () {
  it("Computes the maximum value of array.", function () {
    expect((0, _max.max)([4, 2, 8, 6])).toEqual(8);
  });

  it("if passes empty array it will return undefined", function () {
    expect((0, _max.max)([])).toEqual(undefined);
  });
});