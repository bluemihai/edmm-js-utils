import _ from 'lodash'
import {default as edmm} from '../edmm'
const compact = edmm.compact

describe("compact", () => {

  it('Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.', () => {
    const arr = [0, 1, false, 2, '', 3]
    expect(compact(arr) ).toEqual( [1, 2, 3] )
  })

  it('compact from lodash', () => {
    const arr = [0, 1, false, 2, '', 3]
    const lodashCompact = _.compact(arr)
    expect(compact(arr) ).toEqual( lodashCompact )
  })
})
