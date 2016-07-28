import _ from 'lodash'
import { trim } from '../lib/trim.js'

describe("trim", () => {
  const str = '-_-ab-c-_-'
  const char = '_-'

  it("Removes leading and trailing whitespace or specified characters from string.", () => {
    expect(trim(str, char)).toEqual('ab-c')
  })

  it("checks lodashs trim method against ours", () => {
    const lodashTrim = _.trim( str, char )
    expect( trim( str, char ) ).toEqual( lodashTrim )
  })
})
