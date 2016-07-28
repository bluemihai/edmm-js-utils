const _ = require('lodash')
import { default as edmm } from '../edmm.js'

const reverseArray = edmm.reverseArray

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
