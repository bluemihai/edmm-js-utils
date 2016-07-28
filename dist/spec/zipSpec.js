'use strict';

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _zip = require('../lib/zip.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("zip", function () {
  it("Returns the new array of grouped elements.", function () {
    var expected = [['a', 1, true], ['b', 2, false], ['c', 3], [4]];
    expect((0, _zip.zip)(['a', 'b', 'c'], [1, 2, 3, 4], [true, false])).toEqual(expected);
  });
});
//# sourceMappingURL=zipSpec.js.map