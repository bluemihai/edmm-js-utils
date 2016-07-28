import _ from 'lodash'
import { default as edmm } from '../edmm.js'
const drop = edmm.drop

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
