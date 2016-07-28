import _ from 'lodash'
import {default as edmm} = from '../edmm'
const uniq = edmm.uniq

describe("uniq", () => {

  it('Creates a duplicate-free version of an array, in which only the first occurrence of each element is kept', () => {
    const arr = ['a', 'b', 'c', 'a', 'b']
    expect(uniq(arr) ).toEqual( ['a', 'b', 'c'] )
  })

  it('uniq from lodash', () => {
    const arr = ['a', 'b', 'c']
    const lodashUniq = _.uniq(arr)
    expect(uniq(arr) ).toEqual( lodashUniq )
  })
})
