import _ from 'lodash'
import { default as edmm } from '../edmm.js'

const take = edmm.take

describe("take", () => {
  let arr = [1, 2, 3, 4]
  it("Creates a slice of array with n elements taken from the beginning.", () => {
    expect(take( arr, 2 ) ).toEqual( [1, 2] )
  })

  it("if you pass zero number it should return a empty array", () => {
    expect(take( arr, 0 ) ).toEqual( [] )
  })

  it("if you don't pass any number it should take one number.", () => {
    expect(take( arr ) ).toEqual( [1] )
  })
})
