const _ = require('lodash')
const edmm = require('../lib/sortedIndex.js')

describe("sortedIndex", () => {
  it("Returns the index at which value should be inserted into array", () => {
    expect(edmm.sortedIndex([30, 50], 40)).toEqual(1)
  })
})
