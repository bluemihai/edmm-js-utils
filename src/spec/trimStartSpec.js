import _ from 'lodash'
import { trimStart } from '../lib/trimStart.js'

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
