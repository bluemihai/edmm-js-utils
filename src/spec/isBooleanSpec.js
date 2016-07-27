const _ = require('lodash')
const edmm = require('../lib/isBoolean.js')

describe("isBoolean", () => {

  it('isBoolean true test', () => {
    const isBool = true
    expect( edmm.isBoolean(isBool) ).toEqual( true )
  })
})
