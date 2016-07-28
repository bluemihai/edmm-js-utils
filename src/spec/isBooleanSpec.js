const _ = require('lodash')
const edmm = require('../lib/isBoolean.js')

describe("isBoolean", () => {

  it('isBoolean true condition', () => {
    const isBool = true
    expect( edmm.isBoolean(isBool) ).toEqual( true )
  })
  it('isBoolean false condition', () => {
    const isBool = "fox"
    expect( edmm.isBoolean(isBool) ).toEqual( false )
  })
})
