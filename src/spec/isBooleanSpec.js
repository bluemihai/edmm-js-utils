const _ = require('lodash')
import { default as edmm } from '../edmm'

const isBoolean = edmm.isBoolean

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
