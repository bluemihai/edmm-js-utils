import _ from 'lodash'
import {zip} from '../lib/zip.js'

describe("zip", () => {
  it("Returns the new array of grouped elements.", () => {
    const expected = [['a', 1, true], ['b', 2, false], ['c', 3], [4]]
    expect(zip(['a', 'b', 'c'], [1, 2, 3, 4], [true, false])).toEqual(expected)
  })
})
