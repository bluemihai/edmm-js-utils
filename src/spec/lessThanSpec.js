const _ = require('lodash')
import { default as edmm } from '../edmm.js'

const lessThan = edmm.lessThan

describe("lessThan", () => {
  it('Not a number test', () => {
    const first = 2
    const second = "potato"
    let lodashLessThan = _.lt(first, second)
    expect( edmm.lessThan(first, second) ).toEqual( lodashLessThan )
  })

  it('lessThan true condition', () => {
    const first = 2
    const second = 10
    expect( edmm.lessThan(first, second) ).toEqual( true )
  })
  it('lessThan false condition', () => {
    const first = 5
    const second = 3
    expect( edmm.lessThan(first, second) ).toEqual( false )
  })
})
