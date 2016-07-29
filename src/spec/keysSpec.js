import { default as edmm } from '../edmm.js'

const keys = edmm.keys

describe("keys", () => {
  it('Creates an array of the own enumerable property names of object', () => {
    const obj = {
      a: 1,
      b: 2
    }
    expect( keys( obj ) ).toEqual( ['a', 'b'] )
  })

  it('Creates an array of the own enumerable property names of object', () => {
    const str = 'ab'
    expect( keys( str ) ).toEqual( ['0', '1'] )
  })

})
