import _ from 'lodash'
import { default as edmm } from '../edmm.js'

const trimStart = edmm.trimStart

describe("trimStart", () => {
  const str = '-_-abc-_-'
  const char = '_-'

  it("Removes leading and trailing whitespace or specified characters from string.", () => {
    expect(trimStart(str, char)).toEqual('abc-_-')
  })

  it("checks lodashs trim method against ours", () => {
    const lodashTrim = _.trimStart( str, char )
    expect( trimStart( str, char ) ).toEqual( lodashTrim )
  })
})
