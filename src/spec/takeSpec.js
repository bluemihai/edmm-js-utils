import _ from 'lodash'
import {take} from '../lib/take.js'

describe("take", () => {
  it("Creates a slice of array with n elements taken from the beginning.", () => {
    expect(take( [1, 2, 3, 4], 2 ) ).toEqual( [1, 2] )
  })
})
