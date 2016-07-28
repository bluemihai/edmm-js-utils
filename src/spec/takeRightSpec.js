import _ from 'lodash'
import { default as edmm } from '../edmm.js'

const takeRight = edmm.takeRight

describe("takeRight", () => {
  it("Creates a slice of array with n elements taken from the end.", () => {
    expect(takeRight( [1, 2, 3, 4], 2 ) ).toEqual( [3, 4] )
  })

  it("if you pass zero number it should return a empty array", () => {
    expect(takeRight( [1, 2, 3, 4], 0 ) ).toEqual( [] )
  })

  it("if you don't pass any number it should take one number.", () => {
    expect(takeRight( [1, 2, 3, 4] ) ).toEqual( [4] )
  })
})
