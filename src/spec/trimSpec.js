import _ from 'lodash'
import { trim } from '../lib/trim.js'

describe("trim", () => {
<<<<<<< HEAD
  const str = '-_-abc-_-'
  const char = '_-'

  it("Removes leading and trailing whitespace or specified characters from string.", () => {
    expect(trim(str, char)).toEqual('abc')
=======
  const str = '-_-ab-c-_-'
  const char = '_-'

  it("Removes leading and trailing whitespace or specified characters from string.", () => {
    expect(trim(str, char)).toEqual('ab-c')
>>>>>>> 334f27e0b0c5e24815460fa3db2513c3da6ec6e3
  })

  it("checks lodashs trim method against ours", () => {
    const lodashTrim = _.trim( str, char )
    expect( trim( str, char ) ).toEqual( lodashTrim )
  })
})
