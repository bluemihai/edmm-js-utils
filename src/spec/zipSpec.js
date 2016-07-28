import { default as edmm } from '../edmm.js'

const zip = edmm.zip

describe("zip", () => {
  it("Returns the new array of grouped elements.", () => {
    const expected = [['a', 1, true], ['b', 2, false], ['c', 3], [4]]
    expect(zip(['a', 'b', 'c'], [1, 2, 3, 4], [true, false])).toEqual(expected)
  })
})
