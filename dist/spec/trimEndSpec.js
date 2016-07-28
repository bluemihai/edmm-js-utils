'use strict';

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _trimEnd = require('../lib/trimEnd.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("trim", function () {
  var str = '-_-abc-_-';
  var char = '_-';

  it("Removes leading and trailing whitespace or specified characters from string.", function () {
    expect((0, _trimEnd.trimEnd)(str, char)).toEqual('-_-abc');
  });

  it("checks lodashs trim method against ours", function () {
    var lodashTrim = _lodash2.default.trimEnd(str, char);
    expect((0, _trimEnd.trimEnd)(str, char)).toEqual(lodashTrim);
  });
});