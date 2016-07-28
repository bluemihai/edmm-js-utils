import { concat } from '../lib/concat.js'

describe("concat", () => {
  it("Creates a new array concatenating array with any additional arrays and/or values", () => {
    const arr = [1, 2, 3]
    const e1 = 2
    const e2 = 3
    expect(concat(arr, e1, e2)).toEqual([1, 2, 3])
  })
})
