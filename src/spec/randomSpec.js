const _ = require('lodash')
import { default as edmm } from '../edmm.js'

const random = edmm.random

describe("random", () => {
  it("it return number in expected range", () => {
    // From http://stackoverflow.com/questions/3746725/create-a-javascript-array-containing-1-n
    let foo = Array.from(Array(30).keys())
    let randoms = foo.map(k => edmm.random(6))
    let results = {}
    for (let r of randoms) {
      expect(r).toBeGreaterThan(-1)
      expect(r).toBeLessThan(7)
    }
  })
})
