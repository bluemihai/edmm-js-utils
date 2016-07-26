const _ = require('lodash')
const edmm = require('../edmm.js')


describe("reverseArray", () => {
  const a = [7, 2, 0, 8, 3, 5]
  it("checks that the array gets reversed", () => {
    expect(edmm.reverseArray(a)).toEqual([5, 3, 8, 0, 2, 7])
  })

  // Additional optional test to ensure more precise lodash duplication.
  it("checks that the output is the same as lodash's output", () => {
    const copy = Object.assign( [], a )
    const lodashReversed = _.reverse( copy )
    expect( edmm.reverseArray(a) ).toEqual( lodashReversed )
  })
})

describe("sumArray", () => {
  const a = [7, 2, 0, 8, 3, 5]
  it("checks that the array gets summed", () => {
    expect(edmm.sumArray(a)).toEqual(25)
  })

  // Additional optional test to ensure more precise lodash duplication.
  it("checks that the output is the same as lodash's output", () => {
    const copy = Object.assign( [], a )
    const lodashSum = _.sum( copy )
    expect( edmm.sumArray(a) ).toEqual( lodashSum )
  })
})

describe("sumByArray", () => {
  const objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }]
  const key = 'n'

  it("checks that the array gets summed by key", () => {
    expect(edmm.sumByArray(objects, key)).toEqual(20)
  })

  // Additional optional test to ensure more precise lodash duplication.
  it("checks that the output is the same as lodash's output", () => {
    const copy = Object.assign( [], objects )
    const lodashSumBy = _.sumBy( copy, key )
    expect( edmm.sumByArray(objects, key) ).toEqual( lodashSumBy )
  })
})

describe("firstLetterCapital", () => {

  it('capitalize the first letter of the given string', () => {
    expect( edmm.firstLetterCapital('apple') ).toEqual( 'Apple' )
  })

  it('if first letter capitalize skip', () => {
    expect( edmm.firstLetterCapital( 'Apple' ) ).toEqual( 'Apple' )
  })

  it('if first letter capitalize skip', () => {
    expect( edmm.firstLetterCapital( '9pple' ) ).toEqual( '9pple' )
  })

  it('capitalize from lodash', () => {
    const word = 'apple'
    const lodashCapital = _.capitalize( word )
    expect( edmm.firstLetterCapital(word) ).toEqual( lodashCapital )
  })
})
