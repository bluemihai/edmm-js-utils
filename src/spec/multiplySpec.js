const _ = require('lodash')
import { default as edmm } from '../edmm.js'

const multiply = edmm.multiply

describe("multiply", () => {

  it('compare with lodashMultiply: NaN', () => {
    const first = 2
    const second = "potato"
    let lodashMultiply = _.multiply(first, second)
    expect( edmm.multiply(first, second) ).toEqual( lodashMultiply )
  })

  it('compare with lodashMultiply', () => {
    const first = 2
    const second = 6
    let lodashMultiply = _.multiply(first, second)
    expect( edmm.multiply(first, second) ).toEqual( lodashMultiply )
  })

})
