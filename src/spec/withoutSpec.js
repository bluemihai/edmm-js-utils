import _ from 'lodash'
import {default as edmm} from '../edmm'
const without = edmm.without

describe("without", () => {

  it('Creates an array excluding the given value', () => {
    const arr = [2, 1, 2, 3]
    const val = 1
    expect(without(arr, val) ).toEqual( [2, 2, 3] )
  })

  it('without from lodash', () => {
    const arr = [2, 1, 2, 3]
    const val = 1
    const lodashUniq = _.without(arr, val)
    expect(without(arr, val) ).toEqual( lodashUniq )
  })
})
