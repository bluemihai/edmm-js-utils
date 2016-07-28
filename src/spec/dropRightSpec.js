import { dropRight } from '../lib/dropRight.js'

describe("dropRight", () => {
  it("Creates a slice of array with n elements dropped from the end.", () => {
    const arr = [1, 2, 3, 4]
    const n = 3
    expect(dropRight(arr, n)).toEqual([1])
  })
})
