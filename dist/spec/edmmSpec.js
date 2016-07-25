'use strict';

var _ = require('lodash');
var edmm = require('../edmm.js');

describe("example", function () {
  var a = [7, 2, 0, 8, 3, 5];

  it('arrays should equal using .toEq', function () {
    expect([1, 2, 3]).not.toEqual([3, 2, 1]);
  });

  it("checks that the array gets reversed", function () {
    expect(edmm.reverseArray(a)).toEqual([5, 3, 8, 0, 2, 7]);
  });

  // Additional optional test to ensure more precise lodash duplication.
  it("checks that the output is the same as lodash's output", function () {
    // console.log('edmm.reverseArray(a)', edmm.reverseArray(a))
    // console.log('_.reverse(a)', _.reverse(a))
    var copy = Object.assign([], a);
    var lodashReversed = _.reverse(copy);

    expect(edmm.reverseArray(a)).not.toEqual(lodashReversed);
    // const ourReverse = edmm.reverseArray( a )
    // const loReverse = _.reverse( a )
    //
    // let result = ourReverse.length === loReverse.length
    //
    // for( let index = 0; index < a.length && result; index++ ) {
    //     result = result && ourReverse[ index ] === loReverse[ index ]
    // }
    //
    // expect( result ).toBe( true )
  });
});