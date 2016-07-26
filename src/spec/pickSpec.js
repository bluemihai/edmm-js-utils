import _ from 'lodash'
import { pick } from '../lib/pick.js'

describe("pick", () => {
  const obj = { 'a': 1, 'b': '2', 'c': 3 }
  const arr = ['a', 'b']

  it("creates an object composed of the picked object properties", () => {

    expect(pick(obj, arr)).toEqual({ 'a': 1, 'b': '2' })
  })

  // Additional optional test to ensure more precise lodash duplication.
  // it("checks that the output is the same as lodash's output", () => {
  //   const copy = Object.assign( [], a )
  //   const lodashReversed = _.reverse( copy )
  //   expect( edmm.reverseArray(a) ).toEqual( lodashReversed )
  // })
})
