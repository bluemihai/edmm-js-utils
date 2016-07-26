const _ = require('lodash')
const edmm = require('../lib/sumArray.js')


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
