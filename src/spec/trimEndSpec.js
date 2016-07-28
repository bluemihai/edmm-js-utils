import _ from 'lodash'
import { default as edmm } from '../edmm.js'

const trimEnd = edmm.trimEnd

describe("trim", () => {
  const str = '-_-abc-_-'
  const char = '_-'

  it("Removes leading and trailing whitespace or specified characters from string.", () => {
    expect(trimEnd(str, char)).toEqual('-_-abc')
  })

  it("checks lodashs trim method against ours", () => {
    const lodashTrim = _.trimEnd( str, char )
    expect( trimEnd( str, char ) ).toEqual( lodashTrim )
  })
})
