const _ = require('lodash')
const edmm = require('../lib/firstLetterCapital.js')

describe("firstLetterCapital", () => {

  it('capitalize the first letter of the given string', () => {
    expect( edmm.firstLetterCapital('apple') ).toEqual( 'Apple' )
  })

  it('if first letter capitalize skip', () => {
    expect( edmm.firstLetterCapital( 'Apple' ) ).toEqual( 'Apple' )
  })

  it('if first letter capitalize skip', () => {
    expect( edmm.firstLetterCapital( '9pple' ) ).toEqual( '9pple' )
  })

  it('capitalize from lodash', () => {
    const word = 'apple'
    const lodashCapital = _.capitalize( word )
    expect( edmm.firstLetterCapital(word) ).toEqual( lodashCapital )
  })
})
