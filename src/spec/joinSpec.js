const _ = require('lodash')
const edmm = require('../lib/join.js')

describe("join", () => {

  it('join the first letter of the given string', () => {
    const arr = ['a', 'b', 'c']
    const sep = " "
    expect( edmm.join(arr, sep) ).toEqual( 'a b c' )
  })

  it('join from lodash', () => {
    const arr = ['a', 'b', 'c']
    const sep = "~"
    const lodashJoin = _.join(arr, sep)
    expect( edmm.join(arr, sep) ).toEqual( lodashJoin )
  })
})
