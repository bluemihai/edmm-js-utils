'use strict';

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _isObject = require('../lib/isObject.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("pick", function () {
  it("Checks if value is an object", function () {
    var str = 'This';
    expect((0, _isObject.isObject)(str)).toEqual(false);
  });
});