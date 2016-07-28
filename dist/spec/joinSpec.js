'use strict';

var _ = require('lodash');
var edmm = require('../lib/join.js');

describe("join", function () {

  it('join the first letter of the given string', function () {
    var arr = ['a', 'b', 'c'];
    var sep = " ";
    expect(edmm.join(arr, sep)).toEqual('a b c');
  });

  it('join from lodash', function () {
    var arr = ['a', 'b', 'c'];
    var sep = "~";
    var lodashJoin = _.join(arr, sep);
    expect(edmm.join(arr, sep)).toEqual(lodashJoin);
  });
});
//# sourceMappingURL=joinSpec.js.map