import _ from 'lodash'
import { allLowerCase } from '../lib/allLowerCase.js'

describe("allLowerCase", () => {

  it('Converts string, as a whole, to lower case', () => {
    expect( allLowerCase('APPLE') ).toEqual( 'apple' )
  })

  it('it should skip dash', () => {
    expect( allLowerCase( '--FOO-BAR--' ) ).toEqual( '--foo-bar--' )
  })

  it('it should skip numbers', () => {
    expect( allLowerCase( '9PPLE' ) ).toEqual( '9pple' )
  })

  it('it should skip underscore', () => {
    expect( allLowerCase( '__FOO_BAR__' ) ).toEqual( '__foo_bar__' )
  })

  it('compare the output with lodash toLower function', () => {
    const lodashToUpper = _.toLower( 'APPLE' )
    expect( allLowerCase('APPLE') ).toEqual( lodashToUpper )
  })
})
