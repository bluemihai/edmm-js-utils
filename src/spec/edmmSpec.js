const _ = require('lodash')
const edmm = require('../edmm.js')


describe("example", () => {
  const a = [7, 2, 0, 8, 3, 5]

  it('arrays should equal using .toEq', () => {
    expect([1, 2, 3]).not.toEqual([3, 2, 1])
  })

  it("checks that the array gets reversed", () => {
    expect(edmm.reverseArray(a)).toEqual([5, 3, 8, 0, 2, 7])
  })

  // Additional optional test to ensure more precise lodash duplication.
  it("checks that the output is the same as lodash's output", () => {
    // console.log('edmm.reverseArray(a)', edmm.reverseArray(a))
    // console.log('_.reverse(a)', _.reverse(a))
    const copy = Object.assign( [], a )
    const lodashReversed = _.reverse( copy )

    expect( edmm.reverseArray(a) ).not.toEqual( lodashReversed )
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
  })

})
