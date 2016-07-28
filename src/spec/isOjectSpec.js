import _ from 'lodash'
import { default as edmm } from '../edmm.js'

const isObject = edmm.isObject

describe("pick", () => {
  it("Checks if value is an object", () => {
    const str = 'This'
    expect(isObject(str)).toEqual(false)
  })
})
