'use strict';

var _ = require('lodash');
var edmm = require('../lib/repeat.js');

describe("repeat", function () {

  it('Repeat zero times', function () {
    var str = 'apple';
    var n = 0;
    expect(edmm.repeat(str, n)).toEqual("");
  });

  it('Repeat 3 times', function () {
    var str = 'Duck';
    var n = 3;
    expect(edmm.repeat(str, n)).toEqual("DuckDuckDuck");
  });

  it('repeat from lodash', function () {
    var str = 'apple';
    var n = 3;

    var lodashRepeat = _.repeat(str, n);
    expect(edmm.repeat(str, n)).toEqual(lodashRepeat);
  });
});
//# sourceMappingURL=repeatSpec.js.map