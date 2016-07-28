'use strict';

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _size = require('../lib/size.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("size", function () {
  it("Gets the size of Array by returning its length", function () {
    expect((0, _size.size)([1, 2, 3, 4])).toEqual(4);
  });

  it("Gets the size of Hash by returning its length", function () {
    expect((0, _size.size)({ 'a': 1, 'b': 2 })).toEqual(2);
  });

  it("Gets the size of String by returning its length", function () {
    expect((0, _size.size)("majid")).toEqual(5);
  });
});
//# sourceMappingURL=sizeSpec.js.map