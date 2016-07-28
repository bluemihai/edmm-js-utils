import _ from 'lodash'
import { default as edmm } from '../edmm.js'

const allUpperCase = edmm.allUpperCase

describe("allUpperCase", () => {
  it('Converts string, as a whole, to upper case', () => {
    expect( allUpperCase('apple') ).toEqual( 'APPLE' )
  })

  it('it should skip dash', () => {
    expect( allUpperCase( '--foo-bar--' ) ).toEqual( '--FOO-BAR--' )
  })

  it('it should skip numbers', () => {
    expect( allUpperCase( '9pple' ) ).toEqual( '9PPLE' )
  })

  it('it should skip underscore', () => {
    expect( allUpperCase( '__foo_bar__' ) ).toEqual( '__FOO_BAR__' )
  })

  it('compare the output with lodash toUpper function', () => {
    const lodashToUpper = _.toUpper( 'apple' )
    expect( allUpperCase('apple') ).toEqual( lodashToUpper )
  })
})
