'use strict';

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _take = require('../lib/take.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("take", function () {
  it("Creates a slice of array with n elements taken from the beginning.", function () {
    expect((0, _take.take)([1, 2, 3, 4], 2)).toEqual([1, 2]);
  });
});