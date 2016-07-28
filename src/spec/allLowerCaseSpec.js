import _ from 'lodash'
import { allLowerCase } from '../lib/allLowerCase.js'

describe("allLowerCase", () => {

  it('Converts string, as a whole, to upper case', () => {
    expect( allLowerCase('apple') ).toEqual( 'APPLE' )
  })

  it('it should skip dash', () => {
    expect( allLowerCase( '--foo-bar--' ) ).toEqual( '--FOO-BAR--' )
  })

  it('it should skip numbers', () => {
    expect( allLowerCase( '9pple' ) ).toEqual( '9PPLE' )
  })

  it('it should skip underscore', () => {
    expect( allLowerCase( '__foo_bar__' ) ).toEqual( '__FOO_BAR__' )
  })

  it('compare the output with lodash toUpper function', () => {
    const lodashToUpper = _.toUpper( 'apple' )
    expect( allLowerCase('apple') ).toEqual( lodashToUpper )
  })
})
