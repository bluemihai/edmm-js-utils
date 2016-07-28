'use strict';

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _take = require('../lib/take.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("take", function () {
  var arr = [1, 2, 3, 4];
  it("Creates a slice of array with n elements taken from the beginning.", function () {
    expect((0, _take.take)(arr, 2)).toEqual([1, 2]);
  });

  it("if you pass zero number it should return a empty array", function () {
    expect((0, _take.take)(arr, 0)).toEqual([]);
  });

  it("if you don't pass any number it should take one number.", function () {
    expect((0, _take.take)(arr)).toEqual([1]);
  });
});
//# sourceMappingURL=takeSpec.js.map