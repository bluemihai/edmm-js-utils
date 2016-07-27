const _ = require('lodash')
const edmm = require('../lib/sumByArray.js')

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
