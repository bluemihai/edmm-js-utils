'use strict';

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _takeRight = require('../lib/takeRight.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("takeRight", function () {
  it("Creates a slice of array with n elements taken from the end.", function () {
    expect((0, _takeRight.takeRight)([1, 2, 3, 4], 2)).toEqual([3, 4]);
  });

  it("if you pass zero number it should return a empty array", function () {
    expect((0, _takeRight.takeRight)([1, 2, 3, 4], 0)).toEqual([]);
  });

  it("if you don't pass any number it should take one number.", function () {
    expect((0, _takeRight.takeRight)([1, 2, 3, 4])).toEqual([4]);
  });
});
//# sourceMappingURL=takeRightSpec.js.map