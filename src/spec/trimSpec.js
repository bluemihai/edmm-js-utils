import _ from 'lodash'
import { default as edmm } from '../edmm.js'

const trim = edmm.trim

describe("trim", () => {
  const str = '-_-abc-_-'
  const char = '_-'

  it("Removes leading and trailing whitespace or specified characters from string.", () => {
    expect(trim(str, char)).toEqual('abc')
  })

  it("checks lodashs trim method against ours", () => {
    const lodashTrim = _.trim( str, char )
    expect( trim( str, char ) ).toEqual( lodashTrim )
  })
})
