import _ from 'lodash'
import { isObject } from '../lib/isObject.js'

describe("pick", () => {
  it("Checks if value is an object", () => {
    const str = 'This'
    expect(isObject(str)).toEqual(false)
  })
})
