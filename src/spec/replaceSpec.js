import _ from 'lodash'
import { default as edmm } from '../edmm.js'
const replace = edmm.replace

describe("replace", () => {
  
  it("Replaces matches for pattern in string with replacement.", () => {
    expect(replace('Hi Fred', 'Fred', 'Barney')).toEqual('Hi Barney')
  })

})
