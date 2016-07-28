const _ = require('lodash')
const edmm = require('../lib/multiply.js')

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
