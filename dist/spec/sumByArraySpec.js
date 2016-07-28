'use strict';

var _ = require('lodash');
var edmm = require('../lib/sumByArray.js');

describe("sumByArray", function () {
  var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
  var key = 'n';

  it("checks that the array gets summed by key", function () {
    expect(edmm.sumByArray(objects, key)).toEqual(20);
  });

  // Additional optional test to ensure more precise lodash duplication.
  it("checks that the output is the same as lodash's output", function () {
    var copy = Object.assign([], objects);
    var lodashSumBy = _.sumBy(copy, key);
    expect(edmm.sumByArray(objects, key)).toEqual(lodashSumBy);
  });
});
//# sourceMappingURL=sumByArraySpec.js.map