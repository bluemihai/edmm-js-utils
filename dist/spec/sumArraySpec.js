'use strict';

var _ = require('lodash');
var edmm = require('../lib/sumArray.js');

describe("sumArray", function () {
  var a = [7, 2, 0, 8, 3, 5];
  it("checks that the array gets summed", function () {
    expect(edmm.sumArray(a)).toEqual(25);
  });

  // Additional optional test to ensure more precise lodash duplication.
  it("checks that the output is the same as lodash's output", function () {
    var copy = Object.assign([], a);
    var lodashSum = _.sum(copy);
    expect(edmm.sumArray(a)).toEqual(lodashSum);
  });
});
//# sourceMappingURL=sumArraySpec.js.map