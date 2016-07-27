import _ from 'lodash'
import { pick } from '../lib/pick.js'

describe("pick", () => {
  const obj = { 'a': 1, 'b': '2', 'c': 3 }
  const arr = ['a', 'b']

  it("creates an object composed of the picked object properties", () => {
    expect(pick(obj, arr)).toEqual({ 'a': 1, 'b': '2' })
  })

  it("checks lodashs pick method against ours", () => {
    const lodashPick = _.pick( obj, arr )
    expect( pick( obj, arr ) ).toEqual( lodashPick )
  })
})
