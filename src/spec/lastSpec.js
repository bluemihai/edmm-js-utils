import _ from 'lodash'
import { default as edmm } from '../edmm.js'

const last = edmm.last

describe("last", () => {
  it("Returns the last element of an array.", () => {
    const arr = [1, 2, 3]
    expect(last(arr)).toEqual(3)
  })

  it("checks lodash's last method against ours", () => {
    const arr = [1, 2, 3]
    const lodashLast = _.last( arr)
    expect( last( arr ) ).toEqual( lodashLast )
  })
})
