import _ from 'lodash'
import { drop } from '../lib/drop.js'

describe("drop", () => {


  it("Creates a slice of array with n elements dropped from the beginning.", () => {
    const arr = [1, 2, 3]
    const n = 2
    expect(drop(arr, n)).toEqual([3])
  })

  it("checks lodash's drop method against ours", () => {
    const arr = [1, 2, 3]
    const n = 2
    const lodashDrop = _.drop( arr, n )
    expect( drop( arr, n ) ).toEqual( lodashDrop )
  })
})
