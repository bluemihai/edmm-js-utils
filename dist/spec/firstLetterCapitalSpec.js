'use strict';

var _ = require('lodash');
var edmm = require('../lib/firstLetterCapital.js');

describe("firstLetterCapital", function () {

  it('capitalize the first letter of the given string', function () {
    expect(edmm.firstLetterCapital('apple')).toEqual('Apple');
  });

  it('if first letter capitalize skip', function () {
    expect(edmm.firstLetterCapital('Apple')).toEqual('Apple');
  });

  it('if first letter capitalize skip', function () {
    expect(edmm.firstLetterCapital('9pple')).toEqual('9pple');
  });

  it('capitalize from lodash', function () {
    var word = 'apple';
    var lodashCapital = _.capitalize(word);
    expect(edmm.firstLetterCapital(word)).toEqual(lodashCapital);
  });
});
//# sourceMappingURL=firstLetterCapitalSpec.js.map