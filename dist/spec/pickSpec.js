'use strict';

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _pick = require('../lib/pick.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("pick", function () {
  var obj = { 'a': 1, 'b': '2', 'c': 3 };
  var arr = ['a', 'b'];

  it("creates an object composed of the picked object properties", function () {
    expect((0, _pick.pick)(obj, arr)).toEqual({ 'a': 1, 'b': '2' });
  });

  it("checks lodashs pick method against ours", function () {
    var lodashPick = _lodash2.default.pick(obj, arr);
    expect((0, _pick.pick)(obj, arr)).toEqual(lodashPick);
  });
});