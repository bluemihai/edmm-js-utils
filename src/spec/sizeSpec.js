import _ from 'lodash'
import { default as edmm } from '../edmm.js'

const size = edmm.size

describe("size", () => {
  it("Gets the size of Array by returning its length", () => {
    expect(size( [1, 2, 3, 4] ) ).toEqual( 4 )
  })

  it("Gets the size of Hash by returning its length", () => {
    expect(size( { 'a': 1, 'b': 2 }) ).toEqual( 2 )
  })

  it("Gets the size of String by returning its length", () => {
    expect(size( "majid" ) ).toEqual( 5 )
  })
})
