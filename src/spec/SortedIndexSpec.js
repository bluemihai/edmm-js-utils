const _ = require('lodash')
import { default as edmm } from '../edmm.js'

const sortedIndex = edmm.sortedIndex

describe("sortedIndex", () => {
  it("Returns the index at which value should be inserted into array", () => {
    expect(edmm.sortedIndex([30, 50], 40)).toEqual(1)
  })
})
