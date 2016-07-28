import _ from 'lodash'
import { camelCase } from '../lib/camelCase.js'

describe("camelCase", () => {

  it('Returns the camel cased string', () => {
    expect( camelCase('Foo Bar') ).toEqual( 'fooBar' )
  })

  it('it should skip dash', () => {
    expect( camelCase( '--foo-bar--' ) ).toEqual( 'fooBar' )
  })

  it('it should skip numbers', () => {
    expect( camelCase( '__FOO_BAR__' ) ).toEqual( 'fooBar' )
  })

  it('compare the output with lodash toLower function', () => {
    const lodashToUpper = _.camelCase( 'Foo Bar' )
    expect( camelCase('Foo Bar') ).toEqual( lodashToUpper )
  })
  
})
