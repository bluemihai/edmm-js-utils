import _ from 'lodash'
import { max } from '../lib/max.js'

describe("max", () => {
  it("Computes the maximum value of array.", () => {
    expect( max([4, 2, 8, 6]) ).toEqual( 8 )
  })

  it("if passes empty array it will return undefined", () => {
    expect( max([]) ).toEqual( undefined )
  })
})
