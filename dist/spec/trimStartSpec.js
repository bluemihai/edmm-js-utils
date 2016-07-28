'use strict';

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _trimStart = require('../lib/trimStart.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("trimStart", function () {
  var str = '-_-abc-_-';
  var char = '_-';

  it("Removes leading and trailing whitespace or specified characters from string.", function () {
    expect((0, _trimStart.trimStart)(str, char)).toEqual('abc-_-');
  });

  it("checks lodashs trim method against ours", function () {
    var lodashTrim = _lodash2.default.trimStart(str, char);
    expect((0, _trimStart.trimStart)(str, char)).toEqual(lodashTrim);
  });
});
//# sourceMappingURL=trimStartSpec.js.map