'use strict';

var _ = require('lodash');
var edmm = require('../lib/reverseArray.js');

describe("reverseArray", function () {
  var a = [7, 2, 0, 8, 3, 5];
  it("checks that the array gets reversed", function () {
    expect(edmm.reverseArray(a)).toEqual([5, 3, 8, 0, 2, 7]);
  });

  // Additional optional test to ensure more precise lodash duplication.
  it("checks that the output is the same as lodash's output", function () {
    var copy = Object.assign([], a);
    var lodashReversed = _.reverse(copy);
    expect(edmm.reverseArray(a)).toEqual(lodashReversed);
  });
});
//# sourceMappingURL=reverseArraySpec.js.map