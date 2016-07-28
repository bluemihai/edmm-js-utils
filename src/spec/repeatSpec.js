const _ = require('lodash')
import { default as edmm } from '../edmm.js'

const repeat = edmm.repeat

describe("repeat", () => {
  it('Repeat zero times', () => {
    const str = 'apple'
    const n = 0
    expect( edmm.repeat(str, n) ).toEqual("")
  })

  it('Repeat 3 times', () => {
    const str = 'Duck'
    const n = 3
    expect( edmm.repeat(str, n) ).toEqual("DuckDuckDuck")
  })

  it('repeat from lodash', () => {
    const str = 'apple'
    const n = 3

    const lodashRepeat = _.repeat( str, n )
    expect( edmm.repeat(str, n) ).toEqual( lodashRepeat)
  })
})
