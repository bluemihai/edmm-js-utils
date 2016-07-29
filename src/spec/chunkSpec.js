import _ from 'lodash'
import {default as edmm} from '../edmm'
const chunk = edmm.chunk

describe("chunk", () => {

  it('Creates an array of elements split into groups the length of size. If array can’t be split evenly, the final chunk will be the remaining elements.', () => {
    const arr = ['a', 'b', 'c', 'd']
    const size = 2
    expect(chunk(arr, size) ).toEqual( [['a', 'b'], ['c', 'd']] )
  })

  it('chunk from lodash', () => {
    const arr = ['a', 'b', 'c', 'd']
    const size = 3
    const lodashChunk = _.chunk(arr, size)
    expect(chunk(arr, size) ).toEqual( lodashChunk )
  })
})
